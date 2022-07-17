import mongoose from "mongoose";

export interface BridgetransactionDocument extends mongoose.Document {
  kappa: string;
}

const BridgetransactionSchema = new mongoose.Schema(
  {
    kappa: { type: String, default: true },
  },
);

const Bridgetransaction = mongoose.model<BridgetransactionDocument>("Bridgetransaction", BridgetransactionSchema);

export default Bridgetransaction;

