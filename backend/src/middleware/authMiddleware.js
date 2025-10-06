
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;

  try {
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("Auth Error:", err.message);
        return res.status(401).json({ message: "Invalid token" });
      }

      req.user = decoded; 
      next();
    });
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    res.status(500).json({ message: "Server error in auth middleware" });
  }
};
