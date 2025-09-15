import express from "express";

import {
  registerUser,
  loginUser,
  getUserInfo,
  forgotPassword,
  resetPassword,
} from "../controllers/authcontroller.js";
import { protect } from "../middleware/authMiddleware.js";

import upload  from "../middleware/uploadMiddleWare.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

router.post("/forgot-password", forgotPassword); // send reset link
router.post("/reset-password/:token", resetPassword); // reset password using token

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageUrl });
});

export default router;
