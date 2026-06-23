const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, orderId, grandTotal, items, address, phone, paymentMethod } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Recipient email is required' });
    }

    // Configure the transporter with Gmail SMTP and the App Password
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // TLS
      auth: {
        user: 'adityamazire510@gmail.com',
        pass: 'vinw gmhn wwvb uuhw'
      }
    });

    // Build absolute image URLs from relative paths pointing to the Vercel site
    const domain = 'https://nightgamer.vercel.app';
    const itemsHtml = items.map(item => {
      let imgUrl = item.img || '';
      if (imgUrl && !imgUrl.startsWith('http')) {
        imgUrl = `${domain}/${imgUrl.replace(/^\//, '')}`;
      }
      return `
        <div style="display: flex; align-items: center; background-color: #121824; border: 1px solid #1a2233; padding: 10px; margin-bottom: 12px; border-radius: 6px;">
          <img src="${imgUrl}" alt="${item.title}" style="width: 60px; height: 80px; object-fit: cover; border-radius: 4px; margin-right: 15px; border: 1px solid #2a364f;" />
          <div style="text-align: left;">
            <div style="color: #ffffff; font-weight: bold; font-size: 15px;">${item.title}</div>
            <div style="color: #8892b0; font-size: 12px; text-transform: uppercase; margin-top: 3px;">${item.genre || ''} · PC GAME CD</div>
            <div style="color: #00e5ff; font-weight: bold; font-size: 14px; margin-top: 5px;">&#8377;${item.price?.toLocaleString()}</div>
          </div>
        </div>
      `;
    }).join('');

    const htmlBody = `
      <div style="background-color: #0b0e14; color: #f0f3f8; font-family: 'Rajdhani', Arial, sans-serif; padding: 30px; max-width: 600px; margin: 0 auto; border: 1px solid #1a2233; border-radius: 8px; text-align: left;">
        <div style="text-align: center; border-bottom: 2px solid #7b2fff; padding-bottom: 20px; margin-bottom: 25px;">
          <h1 style="color: #00e5ff; font-family: Arial, sans-serif; font-weight: bold; font-size: 32px; letter-spacing: 2px; margin: 0;">NIGHTGAMERS</h1>
          <p style="color: #8892b0; font-size: 14px; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 3px;">Order Confirmation</p>
        </div>
        
        <h2 style="color: #ffffff; font-size: 20px; margin-top: 0;">Thank you for your order, ${name}!</h2>
        <p style="color: #c5cbd8; line-height: 1.6; font-size: 15px;">We've received your order and are getting it ready. Your games will be packed and shipped in physical CD format within 48 hours.</p>
        
        <div style="background-color: #121824; border: 1px solid #1a2233; padding: 15px; border-radius: 6px; margin: 20px 0;">
          <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
            <tr>
              <td style="color: #8892b0; padding: 4px 0;">Order ID:</td>
              <td style="color: #00e5ff; font-weight: bold; text-align: right; font-family: monospace;">${orderId}</td>
            </tr>
            <tr>
              <td style="color: #8892b0; padding: 4px 0;">Payment Method:</td>
              <td style="color: #ffffff; text-align: right;">${paymentMethod}</td>
            </tr>
            <tr>
              <td style="color: #8892b0; padding: 4px 0;">Est. Delivery:</td>
              <td style="color: #00ff88; font-weight: bold; text-align: right;">3-5 Business Days</td>
            </tr>
          </table>
        </div>
        
        <h3 style="color: #ffffff; font-size: 16px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #1a2233; padding-bottom: 8px;">Purchased Games</h3>
        ${itemsHtml}
        
        <div style="border-top: 1px solid #1a2233; padding-top: 15px; margin-top: 20px; text-align: right;">
          <span style="color: #8892b0; font-size: 16px; margin-right: 15px;">Grand Total:</span>
          <span style="color: #00ff88; font-size: 22px; font-weight: bold;">&#8377;${grandTotal?.toLocaleString()}</span>
        </div>
        
        <h3 style="color: #ffffff; font-size: 16px; margin-top: 25px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #1a2233; padding-bottom: 8px;">Shipping Address</h3>
        <div style="background-color: #121824; border: 1px solid #1a2233; padding: 15px; border-radius: 6px; font-size: 14px; line-height: 1.5;">
          <div style="color: #ffffff; font-weight: bold; margin-bottom: 5px;">${name}</div>
          <div style="color: #c5cbd8;">${address}</div>
          <div style="color: #8892b0; margin-top: 5px;">Phone: ${phone}</div>
        </div>
        
        <div style="text-align: center; margin-top: 35px; color: #8892b0; font-size: 12px; border-top: 1px solid #1a2233; padding-top: 15px;">
          <p style="margin: 0;">If you have any questions, please reply directly to this email or support at adityamazire510@gmail.com.</p>
          <p style="margin: 5px 0 0 0;">© 2026 NightGamers — Physical Game Store.</p>
        </div>
      </div>
    `;

    // Send the email to the customer, and CC the store owner (adityamazire510@gmail.com)
    await transporter.sendMail({
      from: '"NightGamers Store" <adityamazire510@gmail.com>',
      to: email,
      cc: 'adityamazire510@gmail.com',
      subject: `🎮 Order Confirmed! - ${orderId}`,
      html: htmlBody
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mail sending error:', error);
    return res.status(500).json({ error: error.message });
  }
};
