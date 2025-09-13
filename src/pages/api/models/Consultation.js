import mongoose from "mongoose";

const ConsultationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    website: { type: String },
    message: { type: String },
    isAcceptTermsCondition: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Consultation ||
  mongoose.model("Consultation", ConsultationSchema);
