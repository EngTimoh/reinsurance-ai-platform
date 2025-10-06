
import express from "express";
import {
  createClaim,
  getAllClaims,
  getClaimById,
  updateClaimStatus,
  deleteClaim,
} from "../controllers/claimController.js";
import upload from "../middleware/upload.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/", protect, upload.single("evidence"), createClaim);
router.get("/", protect, getAllClaims);
router.get("/:id", protect, getClaimById);
router.put("/:id/status", protect, updateClaimStatus);
router.delete("/:id", protect, deleteClaim);

export default router;
