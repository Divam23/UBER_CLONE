import { Router } from "express"
import {body} from "express-validator"
import { registerUser } from "../controllers/user.controller.js"

const router = Router()


router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:2}).withMessage("Must be 2 characters"),
    body("fullname.lastname").isLength({min:2}).withMessage("Must be 2 characters"),
    body("password").isLength({min:6}).withMessage("Password must be atleast 6 characters long")
],
    registerUser
)



export default router