import { Router } from "express";
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from "../controllers/captain.controller.js";
import { body } from "express-validator";
import { authenticateCaptain } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({ min: 2 }).withMessage("Must be 2 characters"),
    body("fullname.lastname").isLength({ min: 2 }).withMessage("Must be 2 characters"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").isLength({ min: 3 }).withMessage("Color must be at least 3 characters long"),
    body("vehicle.numberPlate").isLength({ min: 5 }).withMessage("Number plate must be at least 5 characters long"),
    body("vehicle.type").isLength({ min: 3 }).withMessage("Vehicle type must be at least 3 characters long"),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Vehicle capacity must be a positive integer"),


], registerCaptain)

router.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
], loginCaptain);

router.get("/profile", authenticateCaptain, getCaptainProfile);

router.get("/logout", authenticateCaptain, logoutCaptain)

export default router;
