// CONTROLLERS :: ADMINCONTROLLER
import { Request,Response,NextFunction, request } from "express";
import { CreateVandorInput } from "../dto/Vandor.dto";
import { Vandor } from "../models";

// CONTROLLERS :: CREATING VANDOR 
export const CreateVandor = async(req:Request, res:Response, next:NextFunction) => {
    const { name, address, pincode, foodType, email, password, ownerName, phone } = <CreateVandorInput>req.body;

    // EXSISTING VANDOR 
    const exsistingVandor = await Vandor.findOne({email: email})
    if ( exsistingVandor !== null ) {
        return res.json({"message": "A VANDOR IS ALREADY EXSISTING IN THE DATABASE WITH THE RESPECTIVE EMAIL!"})
    } 

    // CREATION OF VANDOR 
    const CreateVandor = await Vandor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: password,
        salt: 'thisissalt',
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: []
    });




    return res.json(CreateVandor);
};

// CONTROLLERS :: GETVANDORBYID
export const GetVandorByID = async(req:Request, res:Response, next:NextFunction) => {

};

// CONTROLLERS :: GETVANDORS
export const GetVandors = async(req:Request, res:Response, next:NextFunction) => {

};