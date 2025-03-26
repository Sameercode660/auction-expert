import nodemailer from 'nodemailer';

type BidMailProps = {
  customerEmail: string;
  customerName: string;
  bidAmount: number;
  bidName: string;
};

export const sendBidMail = async ({
  customerEmail,
  customerName,
  bidAmount,
  bidName,
}: BidMailProps) => {
  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider
    auth: {
      user: 'privatething789736@gmail.com', // Your email address
      pass: 'ylpa stve wvnu tsly', // Your email password or app-specific password
    },
  });

  // Mail content
  const mailOptions = {
    from: 'AuctionXpert <privatething789736@gmail.com>', // Sender email
    to: customerEmail, // Receiver email
    subject: `Thank You for Your Bid on ${bidName}!`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Hello ${customerName},</h2>
        <p>Thank you for placing a bid on <strong>${bidName}</strong>.</p>
        <p>Your bid amount is <strong>₹${bidAmount}</strong>.</p>
        <p>We appreciate your participation and wish you the best of luck!</p>
        <hr />
        <p style="font-size: 12px; color: gray;">
          This is an automated email. Please do not reply.
        </p>
      </div>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Bid email sent successfully!');
  } catch (error) {
    console.error('Error sending bid email:', error);
    throw new Error('Failed to send bid email.');
  }
};
