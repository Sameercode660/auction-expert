import nodemailer from 'nodemailer';

type BidAcceptanceMailProps = {
  customerEmail: string;
  customerName: string;
  bidItemName: string;
};

export const sendBidAcceptanceMail = async ({
  customerEmail,
  customerName,
  bidItemName,
}: BidAcceptanceMailProps) => {
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
    subject: `Congratulations! Your Bid on ${bidItemName} Has Been Accepted!`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #28a745;">Congratulations ${customerName}!</h2>
        <p>We are pleased to inform you that your bid on <strong>${bidItemName}</strong> has been successfully accepted.</p>
        <p>You are now the winning bidder for this item!</p>
        
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Next Steps:</h3>
          <p>Please contact the seller directly to arrange the payment process and item delivery:</p>
          <ul>
            <li>Seller Email: seller@example.com</li>
            <li>Seller Phone: +91 98765 43210</li>
          </ul>
        </div>

        <p>If you have any questions, feel free to reach out to our support team at <a href="mailto:support@auctionxpert.com">support@auctionxpert.com</a>.</p>
        
        <p>Thank you for using AuctionXpert!</p>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: gray;">
          This is an automated email from AuctionXpert. Please do not reply directly to this email.
        </p>
      </div>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Bid acceptance email sent successfully!');
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending bid acceptance email:', error);
    throw new Error('Failed to send bid acceptance email.');
  }
};