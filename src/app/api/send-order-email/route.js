

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { orderId, payload, recipients } = body;

//     if (!payload || !recipients || !Array.isArray(recipients) || recipients.length === 0) {
//       return NextResponse.json(
//         { success: false, message: 'Invalid payload or recipients.' },
//         { status: 400 }
//       );
//     }

//     // Configure Nodemailer transporter using your SMTP provider
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST || 'smtp.gmail.com',
//       port: Number(process.env.SMTP_PORT) || 465,
//       secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
//       auth: {
//         user: process.env.SMTP_USER, // Your verified SMTP email address
//         pass: process.env.SMTP_PASS, // Your app password
//       },
//     });

//     const {
//       orderNumber,
//       items,
//       deliveryAddress,
//       subtotal,
//       deliveryFee,
//       discount,
//       finalTotal,
//       promoCode,
//       currency,
//       accountInfo,
//       paymentType,
//       paymentStatus,
//       orderStatus,
//     } = payload;

//     // Build items HTML table rows with exactly 2 columns: Image on left, stacked details & pricing on right
//     const itemsHtml = items
//       .map(
//         (item) => `
//       <tr>
//         <td style="padding: 12px 10px; border-bottom: 1px solid #cbd5e1; vertical-align: top; width: 64px;">
//           ${item.image || item.imageUrl || item.img ? `
//             <img src="${item.image || item.imageUrl || item.img}" alt="${item.name || 'Product'}" style="width: 56px; height: 56px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1; display: block;" />
//           ` : `
//             <div style="width: 56px; height: 56px; background-color: #f8fafc; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #475569;">N/A</div>
//           `}
//         </td>
//         <td style="padding: 12px 10px; border-bottom: 1px solid #cbd5e1; vertical-align: top;">
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr>
//               <td style="font-size: 14px; font-weight: 700; color: #0f172a; padding-bottom: 3px; line-height: 1.3;">
//                 ${item.name || 'Product'}
//               </td>
//             </tr>
//             <tr>
//               <td style="font-size: 11px; color: #475569; font-family: monospace; padding-bottom: 3px;">
//                 ID: ${item.id || 'N/A'}
//               </td>
//             </tr>
//             <tr>
//               <td style="font-size: 12px; color: #475569; padding-bottom: 6px;">
//                 Qty: <strong>${item.quantity || 1}</strong>
//               </td>
//             </tr>
//             <tr>
//               <td style="font-size: 14px; font-weight: 700; color: #0B1B48; padding-top: 2px;">
//                 ₦${Number((item.amount || item.price || 0) * (item.quantity || 1)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//               </td>
//             </tr>
//           </table>
//         </td>
//       </tr>
//     `
//       )
//       .join('');

//     // Format delivery address text/HTML
//     const addressHtml = typeof deliveryAddress === 'object' 
//       ? `${deliveryAddress.fullName || accountInfo.name}<br/>${deliveryAddress.street || deliveryAddress.address || ''}, ${deliveryAddress.city || ''}, ${deliveryAddress.state || ''}<br/>Phone: ${deliveryAddress.phone || accountInfo.phone}`
//       : deliveryAddress;

//     const htmlContent = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="utf-8">
//           <style>
//             body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
//             .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
//             .header { background: linear-gradient(135deg, #0B1B48 0%, #00AEEF 100%); padding: 25px; text-align: center; color: #ffffff; }
//             .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
//             .header p { margin: 5px 0 0; font-size: 13px; color: #e2e8f0; opacity: 0.95; }
//             .content { padding: 20px; }
//             .info-box { background: #f8fafc; border-left: 4px solid #00AEEF; padding: 12px 15px; border-radius: 4px; margin-bottom: 20px; font-size: 13px; }
//             .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
//             .table th { background: #f8fafc; padding: 10px; text-align: left; font-size: 12px; font-weight: 700; color: #475569; border-bottom: 2px solid #cbd5e1; }
//             .totals { width: 100%; font-size: 13px; margin-bottom: 20px; }
//             .totals td { padding: 6px 10px; }
//             .footer { background: #f8fafc; padding: 15px; text-align: center; font-size: 11px; color: #475569; border-top: 1px solid #cbd5e1; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h1>ENITZ GLOBAL LIMITED</h1>
//               <p>Order Confirmation & Summary</p>
//             </div>
//             <div class="content">
//               <div class="info-box">
//                 <strong>Order Number:</strong> ${orderNumber} <br/>
//                 <strong>Payment Type:</strong> ${paymentType} <br/>
//                 <strong>Payment Status:</strong> ${paymentStatus} <br/>
//                 <strong>Order Status:</strong> ${orderStatus}
//               </div>

//               <h3 style="font-size: 14px; color: #0B1B48; margin-bottom: 8px;">Customer Information</h3>
//               <p style="font-size: 13px; margin-top: 0; line-height: 1.5; color: #475569;">
//                 <strong>Name:</strong> ${accountInfo.name}<br/>
//                 <strong>Email:</strong> ${accountInfo.email}<br/>
//                 <strong>Phone:</strong> ${accountInfo.phone}
//               </p>

//               <h3 style="font-size: 14px; color: #0B1B48; margin-bottom: 8px;">Delivery Address</h3>
//               <p style="font-size: 13px; margin-top: 0; line-height: 1.5; color: #475569;">
//                 ${addressHtml}
//               </p>

//               <h3 style="font-size: 14px; color: #0B1B48; margin-bottom: 8px;">Order Items</h3>
//               <table class="table">
//                 <thead>
//                   <tr>
//                     <th style="width: 64px;">Image</th>
//                     <th>Product Details</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   ${itemsHtml}
//                 </tbody>
//               </table>
              
//               <table class="totals">
//                 <tr>
//                   <td style="color: #475569;">Subtotal:</td>
//                   <td style="text-align: right; font-weight: 600;">₦${Number(subtotal || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
//                 </tr>
//                 <tr>
//                   <td style="color: #475569;">Delivery Fee:</td>
//                   <td style="text-align: right; font-weight: 600;">₦${Number(deliveryFee || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
//                 </tr>
//                 ${discount ? `
//                 <tr>
//                   <td style="color: #10b981;">Discount ${promoCode ? `(${promoCode})` : ''}:</td>
//                   <td style="text-align: right; font-weight: 600; color: #10b981;">-₦${Number(discount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
//                 </tr>` : ''}
//                 <tr>
//                   <td style="font-size: 15px; font-weight: 800; color: #0f172a; border-top: 1px solid #cbd5e1; padding-top: 10px;">Final Total:</td>
//                   <td style="text-align: right; font-size: 15px; font-weight: 800; color: #0B1B48; border-top: 1px solid #cbd5e1; padding-top: 10px;">₦${Number(finalTotal || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
//                 </tr>
//               </table>
//             </div>
//             <div class="footer">
//               &copy; ${new Date().getFullYear()} Enitz Global Limited. All rights reserved.
//             </div>
//           </div>
//         </body>
//       </html>
//     `;

//     // Loop through each recipient and send individually to prevent delivery drops or SMTP provider blocks
//     const emailPromises = recipients.map(async (recipientEmail) => {
//       const mailOptions = {
//         from: `"Enitz Global Limited" <${process.env.SMTP_USER}>`,
//         to: recipientEmail,
//         subject: `Order Confirmation #${orderNumber} - Enitz Global Limited`,
//         html: htmlContent,
//       };
//       return transporter.sendMail(mailOptions);
//     });

//     await Promise.all(emailPromises);

//     return NextResponse.json({ success: true, message: 'Emails sent successfully to all recipients.' }, { status: 200 });
//   } catch (error) {
//     console.error('Error sending order email:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }




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
      eventName,
      eventDate,
      venue,
      assignedTicketCode,
      ticketReference,
      tierLevel,
      amount,
      currency = 'NGN',
      accountInfo = {},
      paymentType = 'ONLINE PAYMENT',
      paymentStatus = 'Paid',
      orderStatus = 'Confirmed',
    } = payload;

    const displayRef = orderNumber || assignedTicketCode || ticketReference || orderId || 'N/A';
    const totalAmount = amount || 0;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 0; }
            .container { max-width: 580px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; }
            .header { background-color: #0f172a; padding: 24px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }
            .header p { margin: 4px 0 0; font-size: 13px; color: #94a3b8; }
            .content { padding: 24px; }
            .info-box { background: #f1f5f9; border-left: 4px solid #334155; padding: 12px 16px; border-radius: 4px; margin-bottom: 20px; font-size: 13px; color: #334155; }
            .ticket-card { background-color: #f8fafc; border: 1px dashed #94a3b8; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
            .totals { width: 100%; font-size: 13px; margin-top: 16px; }
            .totals td { padding: 6px 0; }
            .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>EVENT TICKET PASS</h1>
              <p>Your admission pass has been successfully confirmed</p>
            </div>
            <div class="content">
              <div class="info-box">
                <strong>Order Reference:</strong> ${displayRef} <br/>
                <strong>Payment Status:</strong> ${paymentStatus} (${paymentType}) <br/>
                <strong>Status:</strong> ${orderStatus}
              </div>

              <h3 style="font-size: 14px; color: #0f172a; margin-bottom: 6px;">Attendee Details</h3>
              <p style="font-size: 13px; margin: 0 0 16px; line-height: 1.5; color: #475569;">
                <strong>Name:</strong> ${accountInfo.name || 'Valued Customer'}<br/>
                <strong>Email:</strong> ${accountInfo.email || 'N/A'}<br/>
                <strong>Phone:</strong> ${accountInfo.phone || 'N/A'}
              </p>

              <div class="ticket-card">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Event Name</td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; font-weight: 800; color: #0f172a; padding-bottom: 12px;">${eventName || 'Event Pass'}</td>
                  </tr>
                  <tr>
                    <td style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Assigned Ticket Code</td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; font-weight: 800; font-family: monospace; color: #0f172a; padding-bottom: 14px; letter-spacing: 1px;">
                      ${assignedTicketCode || 'PASS-XXXXXX'}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table style="width: 100%; border-collapse: collapse; border-top: 1px solid #e2e8f0; padding-top: 10px;">
                        <tr>
                          <td style="font-size: 12px; color: #475569; padding-top: 10px;">📅 <strong>Date:</strong> ${eventDate || 'TBA'}</td>
                          <td style="font-size: 12px; color: #475569; padding-top: 10px;">🎟️ <strong>Tier:</strong> ${tierLevel || 'STANDARD'}</td>
                        </tr>
                        <tr>
                          <td colspan="2" style="font-size: 12px; color: #475569; padding-top: 6px;">📍 <strong>Venue:</strong> ${venue || 'Venue TBA'}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <table class="totals">
                <tr>
                  <td style="font-size: 15px; font-weight: 800; color: #0f172a; border-top: 1px solid #e2e8f0; padding-top: 10px;">Total Amount Paid:</td>
                  <td style="text-align: right; font-size: 15px; font-weight: 800; color: #0f172a; border-top: 1px solid #e2e8f0; padding-top: 10px;">
                    ₦${Number(totalAmount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              </table>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} All rights reserved. Please present this ticket code at the entrance.
            </div>
          </div>
        </body>
      </html>
    `;

    // Loop through recipients and send individually
    const emailPromises = recipients.map(async (recipientEmail) => {
      const mailOptions = {
        from: `"Notification Desk" <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        subject: `Event Ticket Confirmed [#${assignedTicketCode || displayRef}]`,
        html: htmlContent,
      };
      return transporter.sendMail(mailOptions);
    });

    await Promise.all(emailPromises);

    return NextResponse.json({ success: true, message: 'Ticket emails sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending ticket email:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}