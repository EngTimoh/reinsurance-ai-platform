
import mongoose from "mongoose";

const claimSchema = new mongoose.Schema(
    {
        policyNo: { type: String, required: true },
        claimType: {
            type: String,
            enum: ["health", "accident", "home", "life"],
            required: true
        },
        description: { type: String, required: true },
        amount: { type: Number, required: true },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending"
        },
        evidence: { type: String },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Claim", claimSchema);

