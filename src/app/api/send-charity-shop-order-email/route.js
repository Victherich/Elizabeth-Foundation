import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { orderId, payload, recipients } = body;

    if (!payload || !recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Invalid payload or recipients.' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter using your SMTP provider
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your verified SMTP email address
        pass: process.env.SMTP_PASS, // Your app password
      },
    });

    const {
      orderNumber,
      items = [],
      assignedOrderCode,
      amount,
      currency = 'NGN',
      accountInfo = {},
      paymentType = 'ONLINE PAYMENT',
      paymentStatus = 'Paid',
      orderStatus = 'Confirmed',
    } = payload;

    const displayRef = orderNumber || assignedOrderCode || orderId || 'N/A';
    const totalAmount = amount || items.reduce((sum, item) => sum + Number(item.amount || 0) * Number(item.quantity || 1), 0);

    // Build items HTML table rows with image on left, stacked details & pricing on right
    const itemsHtml = items
      .map(
        (item) => `
      <tr>
        <td style="padding: 12px 10px; border-bottom: 1px solid #cbd5e1; vertical-align: top; width: 64px;">
          ${item.image || item.imageUrl || item.img ? `
            <img src="${item.image || item.imageUrl || item.img}" alt="${item.name || item.productName || 'Product'}" style="width: 56px; height: 56px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1; display: block;" />
          ` : `
            <div style="width: 56px; height: 56px; background-color: #f8fafc; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #475569;">N/A</div>
          `}
        </td>
        <td style="padding: 12px 10px; border-bottom: 1px solid #cbd5e1; vertical-align: top;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="font-size: 14px; font-weight: 700; color: #0f172a; padding-bottom: 3px; line-height: 1.3;">
                ${item.name || item.productName || 'Product'}
              </td>
            </tr>
            <tr>
              <td style="font-size: 11px; color: #475569; font-family: monospace; padding-bottom: 3px;">
                Ref / ID: ${item.productReference || item.productId || item.id || 'N/A'}
              </td>
            </tr>
            <tr>
              <td style="font-size: 12px; color: #475569; padding-bottom: 6px;">
                Qty: <strong>${item.quantity || 1}</strong>
              </td>
            </tr>
            <tr>
              <td style="font-size: 14px; font-weight: 700; color: #611317; padding-top: 2px;">
                ₦${Number((item.amount || item.price || 0) * (item.quantity || 1)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `
      )
      .join('');

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
            .header { background: linear-gradient(135deg, #611317 0%, #4a0e12 100%); padding: 25px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { margin: 5px 0 0; font-size: 13px; color: #e5b84c; opacity: 0.95; }
            .content { padding: 20px; }
            .info-box { background: #f8fafc; border-left: 4px solid #e5b84c; padding: 12px 15px; border-radius: 4px; margin-bottom: 20px; font-size: 13px; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .table th { background: #f8fafc; padding: 10px; text-align: left; font-size: 12px; font-weight: 700; color: #475569; border-bottom: 2px solid #cbd5e1; }
            .totals { width: 100%; font-size: 13px; margin-bottom: 20px; }
            .totals td { padding: 6px 10px; }
            .footer { background: #f8fafc; padding: 15px; text-align: center; font-size: 11px; color: #475569; border-top: 1px solid #cbd5e1; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>EFSS CHARITY STORE</h1>
              <p>Order Confirmation & Summary</p>
            </div>
            <div class="content">
              <div class="info-box">
                <strong>Order Number:</strong> ${displayRef} <br/>
                <strong>Payment Type:</strong> ${paymentType} <br/>
                <strong>Payment Status:</strong> ${paymentStatus} <br/>
                <strong>Order Status:</strong> ${orderStatus}
              </div>

              <h3 style="font-size: 14px; color: #611317; margin-bottom: 8px;">Customer Information</h3>
              <p style="font-size: 13px; margin-top: 0; line-height: 1.5; color: #475569;">
                <strong>Name:</strong> ${accountInfo.name || 'Valued Customer'}<br/>
                <strong>Email:</strong> ${accountInfo.email || 'N/A'}<br/>
                <strong>Phone:</strong> ${accountInfo.phone || 'N/A'}
              </p>

              <h3 style="font-size: 14px; color: #611317; margin-bottom: 8px;">Order Items</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th style="width: 64px;">Image</th>
                    <th>Product Details</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>
              
              <table class="totals">
                <tr>
                  <td style="font-size: 15px; font-weight: 800; color: #0f172a; border-top: 1px solid #cbd5e1; padding-top: 10px;">Total Amount Paid:</td>
                  <td style="text-align: right; font-size: 15px; font-weight: 800; color: #611317; border-top: 1px solid #cbd5e1; padding-top: 10px;">₦${Number(totalAmount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                </tr>
              </table>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} EFSS Charity Store. All rights reserved. Thank you for your support.
            </div>
          </div>
        </body>
      </html>
    `;

    // Loop through each recipient and send individually to prevent delivery drops or SMTP provider blocks
    const emailPromises = recipients.map(async (recipientEmail) => {
      const mailOptions = {
        from: `"EFSS Charity Store" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        subject: `Order Confirmation #${displayRef} - EFSS Charity Store`,
        html: htmlContent,
      };
      return transporter.sendMail(mailOptions);
    });

    await Promise.all(emailPromises);

    return NextResponse.json({ success: true, message: 'Emails sent successfully to all recipients.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending charity shop order email:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}