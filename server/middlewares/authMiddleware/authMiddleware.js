import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token =
    req?.cookies?.token || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized or tokens not found",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    req.token = token;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid or expired token",
    });
  }
};
