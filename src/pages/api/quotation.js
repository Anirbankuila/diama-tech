import mongoose from "mongoose";
import ProjectQuotation from "./models/ProjectQuotation";

const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, projectDescription } = req.body;

  if (!name || !email || !projectDescription) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    await connectToDB();

    const newQuotation = new ProjectQuotation({
      name,
      email,
      projectDescription,
    });
    await newQuotation.save();

    // Send email to support
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: parseInt(process.env.SMTP_PORT),
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });

    // const mailOptions = {
    //   from: email, // User's email
    //   to: process.env.SUPPORT_EMAIL,
    //   subject: "New Project Quotation Request",
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Description: ${projectDescription}
    //   `,
    // };

    // await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Quotation submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}
