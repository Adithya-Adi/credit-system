import express from "express";
import {
  signUpController,
  signInController,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/register", signUpController);
router.post("/login", signInController);

export default router;
