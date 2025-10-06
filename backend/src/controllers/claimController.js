import Claim from "../models/Claims.js";

// Create a new claim
export const createClaim = async (req, res) => {
  try {
    const { policyNo, claimType, description, amount } = req.body;

    const claim = await Claim.create({
      policyNo,
      claimType,
      description,
      amount,
      evidence: req.file ? `/uploads/claims/${req.file.filename}` : null,
      user: req.user._id,
    });

    res.status(201).json({ message: "Claim created successfully", claim });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all claims (admin → all, user → only their own)
export const getAllClaims = async (req, res) => {
  try {
    let claims;

    if (req.user.role === "admin") {
      claims = await Claim.find().populate("user", "name email policyNo");
    } else {
      claims = await Claim.find({ user: req.user.id }).populate("user", "name email policyNo");
    }

    if (!claims || claims.length === 0) {
      return res.status(404).json({ message: "No claims found" });
    }

    res.status(200).json(claims);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update claim status (admin/broker only)
export const updateClaimStatus = async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.category !== "broker") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const claim = await Claim.findById(req.params.id);
    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    claim.status = req.body.status || claim.status;
    await claim.save();

    res.status(200).json({ message: "Claim status updated successfully", claim });
  } catch (error) {
    res.status(500).json({ message: "Error updating claim", error: error.message });
  }
};

// Delete claim
export const deleteClaim = async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id);
    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    if (claim.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await claim.deleteOne();
    res.status(200).json({ message: "Claim deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
 
// getting claims by id

export const getClaimById = async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id).populate("user", "name email policyNo");

    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    if (claim.user._id.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    res.status(200).json(claim);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

