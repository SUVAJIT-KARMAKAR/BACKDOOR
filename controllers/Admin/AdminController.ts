// CONTROLLERS :: ADMINCONTROLLER
import { Request,Response,NextFunction } from "express";
import { CreateVandorInput } from "../../dto/Vandor/Vandor.dto";
import { Vandor } from "../../models";
import { GeneratePassword } from "../../utility/PasswordUtility/PasswordUtility";
import { GenerateSalt } from "../../utility/PasswordUtility/PasswordUtility";

// FINDING THE VANDOR 
export const FindVandor = async(id:string | undefined, email? : string) => {
    if (email) {
        return await Vandor.findOne({email:email})
    } else {
        return await Vandor.findById(id)
    }
}

// CONTROLLERS :: CREATING VANDOR 
export const CreateVandor = async(req:Request, res:Response, next:NextFunction) => {
    const { name, address, pincode, foodType, email, password, ownerName, phone } = <CreateVandorInput>req.body;

    // EXSISTING VANDOR 
    const exsistingVandor = await FindVandor('', email);
    if ( exsistingVandor !== null ) {
        return res.json({"message": "A VANDOR IS ALREADY EXSISTING IN THE DATABASE WITH THE RESPECTIVE EMAIL!"})
    } 

    // GENERATING A SALT 
    const salt = await GenerateSalt();
    // PASSWORD ENCRYPTION 
    const userPassword = await GeneratePassword(password, salt);

    // CREATION OF VANDOR 
    const CreateVandor = await Vandor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: userPassword,
        salt: salt,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
        foods: []
    });

    return res.json(CreateVandor);
};

// CONTROLLERS :: GETVANDORBYID
export const GetVandorByID = async(req:Request, res:Response, next:NextFunction) => {
    // FINDING THE VANDORS USING THE VANDOR ID
    const vandorId = req.params.id;
    const vandor = await FindVandor(vandorId);

    if ( vandor !== null ) {
        return res.json(vandor);
    }
    return res.json({"message": "NO VANDOR IS FOUND WITH THIS ASSOCIATED ID!"});
};

// CONTROLLERS :: GETVANDORS
export const GetVandors = async(req:Request, res:Response, next:NextFunction) => {
    // FINDING THE VANDORS FROM THE DATABASE 
    const vandors = await Vandor.find();
    if ( vandors !== null ) {
        return res.json(vandors);
    }
    return res.json({"message" : "NO VANDORS CAN BE FOUND IN THE DATABASE!"});
};