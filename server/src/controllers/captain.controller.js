import captainModel from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";

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