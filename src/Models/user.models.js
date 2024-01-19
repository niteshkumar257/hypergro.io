import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  open: {
    type: String,
    required: true,
  },
  low: {
    type: String,
    required: true,
  },
  high: {
    type: String,
    required: true,
  },
  close: {
    type: String,
    required: true,
  },
});
export const Stock = mongoose.model("Stock", stockSchema);
