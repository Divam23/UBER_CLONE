import captainModel from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";
import blacklistTokenModel from "../models/blacklistToken.model.js";

export const registerCaptain = async (req, res, next) => {

    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { fullname, email, password, vehicle } = req.body;

        // Check if the captain already exists
        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({ message: "Captain already exists" });
        }

        const hashedPassword = await captainModel.hashPassword(password);

        const newCaptain = await createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password:hashedPassword,
            color: vehicle.color,
            numberPlate: vehicle.numberPlate,
            capacity: vehicle.capacity,
            type: vehicle.type,
        });

        const token = newCaptain.generateAuthToken();

        res.status(201).json({token, newCaptain});
    } catch (error) {
        next(error);
    } 
}

export const loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        const captain = await captainModel.findOne({ email }).select("+password");
        if (!captain) {
            return res.status(404).json({ message: "Captain not found" });
        }

        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = captain.generateAuthToken();

        res.cookie('token', token)
        res.status(200).json({ token, captain });
    } catch (error) {
        next(error);
    }
}

export const getCaptainProfile = async (req, res, next) => {
    try {
        const captain = req.captain;
        if (!captain) {
            return res.status(404).json({ message: "Captain not found" });
        }
        res.status(200).json(captain);
    } catch (error) {
        next(error);
    }
}

export const logoutCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Add the token to the blacklist
        await blacklistTokenModel.create({ token });

        res.clearCookie('token');
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        next(error);
    }
}