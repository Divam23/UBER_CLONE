import mongoose, {Schema} from "mongoose";
import { configDotenv } from "dotenv";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

configDotenv();

const userSchema = new Schema({
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase: true,
        trim: true,
    },
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
    password:{
        type:String,
        select: false,
        required:true
    },
    socketId:{
        type: String,
    }

})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model('user', userSchema);

export default userModel;

