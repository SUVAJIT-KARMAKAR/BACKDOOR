// UTILITY :: PASSWORD 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { VandorPayload } from "../dto/Vandor.dto";
import { APP_SECRET } from "../config";


// SALT GENERATION FOR THE PASWORD
export const GenerateSalt = async () => {
    return await bcrypt.genSalt()
} 

// GENERATING THE ENCODED PASSWORD 
export const GeneratePassword = async( password: string, salt: string) => {
    return await bcrypt.hash(password, salt);
}

// PASSWORD VALIDATION
export const ValidatePassword = async(enteredPassword:string, savedPassword:string, salt:string) => {
    return await GeneratePassword(enteredPassword, salt ) === savedPassword;
}

// GENERATING SIGNATURE 
export const GenerateSignature = (payload: VandorPayload) => {
    return jwt.sign(payload, APP_SECRET, {expiresIn: '30m'});
}   