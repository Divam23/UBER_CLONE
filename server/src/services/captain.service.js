import captainModel from "../models/captain.model.js";

const createCaptain = async ({ firstname, lastname, email, password, color, numberPlate, type, capacity  }) => {
    if (!firstname || !lastname || !email || !password || !color || !numberPlate || !type || !capacity) {
        throw new Error("All fields are required");
    }

    const createCaptain = captainModel.create({
        fullname: {
            firstname, 
            lastname
        },
        email, 
        password,
        vehicle: {
            color,
            numberPlate,
            type,
            capacity
        }
    })

    return createCaptain;
}

export { createCaptain }