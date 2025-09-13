import mongoose from "mongoose";

const QuotationSchema = new mongoose.Schema({
  projectCategory: { type: [String], required: true },
  projectDescription: { type: String, required: true },
  referenceTools: { type: [String], required: true },
  expectedBudget: { type: String, required: true },
  projectTimeline: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Quotation ||
  mongoose.model("Quotation", QuotationSchema);
