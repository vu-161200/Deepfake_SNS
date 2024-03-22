import { Router } from "express";
import {
  login,
  register,
  logout,
  refreshToken,
  forgotPassword,
} from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";
const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", auth, logout);
router.post("/refresh-token", refreshToken);
router.post("/forgot-password", auth, forgotPassword);
// router.post('/verify-email', verifyEmail);
// router.post('/send-verification-code', sendVerificationCode);

// EDIT
router.post("/change-password", auth, changePassword);
router.put("/", auth, imageUpload, editUser);

router.get("/", auth, getUser);
router.delete("/", auth, deleteUser);

export default router;
