import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { configDotenv } from "dotenv";
configDotenv();

const captainSchema = new Schema({
    fullname:{
        
        firstname:{
            type: String,
            required: true,
            trim: true,
            minlength: [2, "Atleast 2 characters required"]
        },
        lastname:{
            type: String,
            required: true,
            trim: true,
            minlength: [2, "Atleast 2 characters required"]
        },
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase: true,
        trim: true,
    },
    password:{
        type:String,
        select: false,
        required:true,
        minlength: [6, "Password must be atleast 6 characters long"],
    },
    socketId:{
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            trim: true,
            minlength: [3, "Color must be atleast 3 characters long"]
        },
        numberPlate:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: [5, "Number plate must be atleast 5 characters long"]
        },
        type: {
            type: String,
            required: true,
            enum: ['car', 'bike', 'auto'],
            trim: true,
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be atleast 1"]
        }
    },
    location:{
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}


const captainModel = mongoose.model('Captain', captainSchema);

export default captainModel;