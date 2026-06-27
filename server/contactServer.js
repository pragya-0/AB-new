import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_ORIGIN,
    methods: ["POST"],
  })
);

app.use(express.json({ limit: "20kb" }));

const required = ["name", "email", "phone", "subject", "message"];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value) {
  return String(value || "").trim();
}

app.get("/", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "AB contact server is running",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const body = req.body || {};

    // Honeypot spam field. Real users never fill this.
    if (body.website) {
      return res.status(200).json({ success: true });
    }

    const data = {
      name: clean(body.name),
      email: clean(body.email),
      phone: clean(body.phone),
      company: clean(body.company),
      subject: clean(body.subject),
      message: clean(body.message),
    };

    for (const field of required) {
      if (!data[field]) {
        return res.status(400).json({
          success: false,
          message: `${field} is required.`,
        });
      }
    }

    if (!isValidEmail(data.email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (data.message.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message should be at least 10 characters.",
      });
    }

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.CONTACT_RECEIVER_EMAIL
    ) {
      return res.status(500).json({
        success: false,
        message: "Email server is not configured yet.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeSubject = data.subject.replace(/[\r\n]/g, " ");

    await transporter.sendMail({
      from: `"AB Website Enquiry" <${process.env.SMTP_USER}>`,
      replyTo: data.email,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `Website Enquiry: ${safeSubject}`,
      text: `
New enquiry from Arijit Bhattacharyya website

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || "Not provided"}
Subject: ${data.subject}

Message:
${data.message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New Website Enquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`AB contact server running on http://localhost:${PORT}`);
});