import mongoose from "mongoose";

const projectQuotationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: "" },
  message: { type: String, default: "" },
  categories: { type: [String], default: [] },
  projectDescription: { type: String, required: true },
  technologies: { type: [String], default: [] },
  budget: { type: String, default: "" },
  timeline: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.ProjectQuotation ||
  mongoose.model("ProjectQuotation", projectQuotationSchema);
