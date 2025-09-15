import transporter from "./transporter.js";

const sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: '"Expense Tracker" <burunithin18@gmail.com>', 
      to,
      subject,
      html,
    });
    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};

export default sendEmail;