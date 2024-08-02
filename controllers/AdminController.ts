// CONTROLLERS :: ADMINCONTROLLER
import { Request,Response,NextFunction, request } from "express";
import { CreateVandorInput } from "../dto/Vandor.dto";
import { Vandor } from "../models";

// CONTROLLERS :: CREATING VANDOR 
export const CreateVandor = async(req:Request, res:Response, next:NextFunction) => {
    const { name, address, pincode, foodType, email, password, ownerName, phone } = <CreateVandorInput>req.body;

    // CREATION OF VANDOR 
    const CreateVandor = await Vandor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: password,
        salt: '',
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: []
    });

    return res.json({ name, address, pincode, foodType, email, password, ownerName, phone });
};

// CONTROLLERS :: GETVANDORBYID
export const GetVandorByID = async(req:Request, res:Response, next:NextFunction) => {

};

// CONTROLLERS :: GETVANDORS
export const GetVandors = async(req:Request, res:Response, next:NextFunction) => {

};