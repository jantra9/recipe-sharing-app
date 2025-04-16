const jwt = require("jsonwebtoken");
require("dotenv").config();
const asyncHandler = require("express-async-handler");

const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authorization header missing or malformed" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token" });
    }
    req.user = decoded; // Attach user info to request
    next();
  });
});

module.exports = validateToken;
