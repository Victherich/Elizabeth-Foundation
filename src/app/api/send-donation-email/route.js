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

    // Configure Nodemailer transporter using neutral SMTP provider settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const {
      orderNumber,
      donationType,
      amount,
      currency = 'NGN',
      accountInfo = {},
      paymentType = 'ONLINE PAYMENT',
      paymentStatus = 'Paid',
      orderStatus = 'Confirmed',
    } = payload;

    const displayRef = orderNumber || orderId || 'N/A';
    const totalAmount = amount || 0;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
            .container { max-width: 580px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; }
            .header { background-color: #611317; padding: 24px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }
            .header p { margin: 4px 0 0; font-size: 13px; color: #e5b84c; }
            .content { padding: 24px; }
            .info-box { background: #f1f5f9; border-left: 4px solid #611317; padding: 12px 16px; border-radius: 4px; margin-bottom: 20px; font-size: 13px; color: #334155; }
            .donation-card { background-color: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
            .totals { width: 100%; font-size: 13px; margin-top: 16px; }
            .totals td { padding: 6px 0; }
            .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>EFSS DONATION RECEIPT</h1>
              <p>Thank you for supporting our fundraising campaign</p>
            </div>
            <div class="content">
              <div class="info-box">
                <strong>Donation Reference:</strong> ${displayRef} <br/>
                <strong>Payment Status:</strong> ${paymentStatus} (${paymentType}) <br/>
                <strong>Status:</strong> ${orderStatus}
              </div>

              <h3 style="font-size: 14px; color: #0f172a; margin-bottom: 6px;">Donor Details</h3>
              <p style="font-size: 13px; margin: 0 0 16px; line-height: 1.5; color: #475569;">
                <strong>Name:</strong> ${accountInfo.name || 'Valued Donor'}<br/>
                <strong>Email:</strong> ${accountInfo.email || 'N/A'}<br/>
                <strong>Phone:</strong> ${accountInfo.phone || 'N/A'}
              </p>

              <div class="donation-card">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Donation Category / Type</td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; font-weight: 800; color: #0f172a; padding-bottom: 12px;">${donationType || 'General Campaign Donation'}</td>
                  </tr>
                  <tr>
                    <td>
                      <table style="width: 100%; border-collapse: collapse; border-top: 1px solid #e2e8f0; padding-top: 10px;">
                        <tr>
                          <td style="font-size: 12px; color: #475569; padding-top: 10px;">🛡️ <strong>Campaign:</strong> ₦500M Fundraising Project</td>
                          <td style="font-size: 12px; color: #475569; padding-top: 10px; text-align: right;">💳 <strong>Currency:</strong> ${currency}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <table class="totals">
                <tr>
                  <td style="font-size: 15px; font-weight: 800; color: #0f172a; border-top: 1px solid #e2e8f0; padding-top: 10px;">Total Contribution:</td>
                  <td style="text-align: right; font-size: 15px; font-weight: 800; color: #611317; border-top: 1px solid #e2e8f0; padding-top: 10px;">
                    ₦${Number(totalAmount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              </table>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} EFSS. All rights reserved. Thank you for making a profound impact.
            </div>
          </div>
        </body>
      </html>
    `;

    // Loop through recipients and send individually
    const emailPromises = recipients.map(async (recipientEmail) => {
      const mailOptions = {
        from: `"EFSS Donations" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        subject: `Donation Confirmed [#${displayRef}] - Thank You!`,
        html: htmlContent,
      };
      return transporter.sendMail(mailOptions);
    });

    await Promise.all(emailPromises);

    return NextResponse.json({ success: true, message: 'Donation receipt emails sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending donation email:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}