import express from "express";
import { saveEmail, sendEmail } from "../Controllers/emailController.js";
import wrapAsync from "../utils/wrapAsync.js";

const router = express.Router();

router.post("/subscribe", wrapAsync(saveEmail));

router.post("/send", wrapAsync(sendEmail));

export default router;

