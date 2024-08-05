// CONTROLLER :: VANDORCONTROLLER 
import { Request, Response, NextFunction, request } from "express";
import { VandorLoginInputs } from "../dto/Vandor.dto";
import { FindVandor } from "./AdminController";
import { ValidatePassword, GenerateSignature } from "../utility";
import { EditVandorInput } from "../dto/Vandor.dto";

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
            return res.json({"message" : "THE PASSWORD IS NOT VALID!"});
        }
    }
    return res.json({"message" : "LOGIN CREDENTIALS ARE NOT VALID!"})
} 

// VANDOR :: GET PROFILE 
export const GetVandorProfile = async(req:Request, res:Response, next:NextFunction) => {
    // STORING THE USER PAYLOAD FOR AUTHENTICATION 
    const user = req.user;
    if( user ){
        const existingVendor = await FindVandor(user._id);
        return res.json(existingVendor);
    }

    return res.json({'message': 'VANDOR INFORMATION IS NOT FOUND!'})
}

// VANDOR :: UPDATE PROFILE 
export const UpdateVandorProfile = async(req:Request, res:Response, next:NextFunction) => {
    const user = req.user;

    const { foodType, name, address, phone} = <EditVandorInput>req.body;
    if(user){
        const existingVendor = await FindVandor(user._id);
        
        if(existingVendor !== null){

            existingVendor.name = name;
            existingVendor.address = address;
            existingVendor.phone = phone;
            existingVendor.foodType = foodType;

            const saveResult = await existingVendor.save();
            return res.json(saveResult);
        }
    }
    return res.json({'message': 'UNABLE TO UPDATE THE VANDOR PROFILE!'})
}
// VANDOR :: UPDATE SERVICE 
export const UpdateVandorService = async(req:Request, res:Response, next:NextFunction) => {
    
}