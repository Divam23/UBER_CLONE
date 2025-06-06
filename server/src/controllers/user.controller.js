import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";
import {createUser} from "../services/user.service.js";
import blacklistTokenModel from "../models/blacklistToken.model.js";

export const registerUser = async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password} = req.body;
    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await userModel.hashPassword(password)

    const user = await createUser({
        firstname: fullname.firstname, lastname: fullname.lastname, email, password:hashedPassword
    })

    const token = user.generateAuthToken();
    res.status(201).json({token, user})
}

export const loginUser = async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    const user = await userModel.findOne({ email }).select("+password")

    console.log(user)

    if(!user){
        return res.status(401).json("Invalid email/password");
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json("Invalid email/password");
    }

    const token = user.generateAuthToken();
    res.cookie('token', token)

    return res.status(200).json({token, user})
}

export const getUserProfile = async(req, res, next)=>{
    return res.status(200).json(req.user)
}

export const logoutUser = async(req, res, next)=>{
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await blacklistTokenModel.create({token})
    res.status(200).json({message: "Logged Out"});
}