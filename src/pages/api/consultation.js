import { connectToDatabase } from "./lib/mongodb";
import Consultation from "./models/Consultation";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectToDatabase();

    const { firstName, lastName, phoneNumber, emailAddress, website, message } =
      req.body;

    const newConsultation = new Consultation({
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      website,
      message,
    });

    await newConsultation.save();

    res
      .status(201)
      .json({ message: "Consultation request saved successfully" });
  } catch (error) {
    console.error("Error saving consultation:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
