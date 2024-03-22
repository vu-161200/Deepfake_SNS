import jwt from "jsonwebtoken";
import JWT_SECRET from "../config/index.js";

const auth =  async (req, rep, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Unauthorized: Invalid token" });
    } else {
      req.user = decoded;
      next();
    }
  });
};

export {auth};
