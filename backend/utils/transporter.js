import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // for port 587
  auth: {
    user: process.env.EMAIL_USER, // "apikey"
    pass: process.env.EMAIL_PASS, // your SendGrid API key
  },
  tls: {
    rejectUnauthorized: false, // <--- ADD THIS LINE
  },
});

export default transporter;
