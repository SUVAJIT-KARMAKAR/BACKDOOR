// CONTROLLER :: VANDORCONTROLLER 
import { Request, Response, NextFunction, request } from "express";
import { VandorLoginInputs } from "../dto/Vandor.dto";
import { FindVandor } from "./AdminController";
import { ValidatePassword, GenerateSignature } from "../utility";

// VANDOR :: LOGIN FUNCTION 
export const VandorLogin = async(req:Request, res:Response, next:NextFunction) => {
    // CAPTURING LOGIN DATA
    const { email, password } = <VandorLoginInputs>req.body;
    const existingVandor = await FindVandor('', email);

    if (existingVandor !== null) {
        // VANDOR VALIDATION AND ACCESS PERMISSION FOR THE VANDOR 
        const validation = await ValidatePassword(password, existingVandor.password, existingVandor.salt);
        if ( validation ) {
            const signature = GenerateSignature({
                _id: existingVandor.id,
                email: existingVandor.email,
                foodTypes: existingVandor.foodType,
                name: existingVandor.name
            })
            return res.json(signature);
        }else {
            return res.json({"message": "THE PASSWORD IS NOT VALID!"});
        }
    }
    return res.json({"message" : "LOGIN CREDENTIALS ARE NOT VALID!"})
} 

// VANDOR :: GET PROFILE 
export const GetVandorProfile = async(req:Request, res:Response, next:NextFunction) => {

}

// VANDOR :: UPDATE PROFILE 
export const UpdateVandorProfile = async(req:Request, res:Response, next:NextFunction) => {

}
// VANDOR :: UPDATE SERVICE 
export const UpdateVandorService = async(req:Request, res:Response, next:NextFunction) => {
    
}