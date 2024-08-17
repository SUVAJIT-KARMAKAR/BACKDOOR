// CONTROLLER :: VANDORCONTROLLER 
import { Request, Response, NextFunction } from "express";
import { VandorLoginInputs } from "../../dto/Vandor/Vandor.dto";
import { FindVandor } from "../Admin/AdminController";
import { ValidatePassword } from "../../utility/PasswordUtility/PasswordUtility";
import { GenerateSignature } from "../../utility/PasswordUtility/PasswordUtility";
import { EditVandorInputs } from "../../dto/Vandor/Vandor.dto";
import { CreateFoodInputs } from "../../dto/Food/Food.dto";
import { Food } from "../../models";

// VANDOR :: LOGIN FUNCTION 
export const VandorLogin = async(req:Request, res:Response, next:NextFunction) => {
    // CAPTURING LOGIN DATA
    const { email, password } = <VandorLoginInputs> req.body;
    const existingVandor = await FindVandor('', email);

    if (existingVandor !== null) {
        // VANDOR VALIDATION AND ACCESS PERMISSION FOR THE VANDOR 
        const validation = await ValidatePassword(password, existingVandor.password, existingVandor.salt);
        if ( validation ) {
            const signature = GenerateSignature({
                _id: existingVandor.id,
                email: existingVandor.email,
                foodType: existingVandor.foodType,
                name: existingVandor.name
            })
            return res.json(signature);
        } else {
            return res.json({"message" : "THE PASSWORD IS NOT VALID!"});
        }
    }
    return res.json({"message" : "LOGIN CREDENTIALS ARE NOT VALID!"})
} 

// VANDOR :: GET PROFILE 
export const GetVandorProfile = async(req:Request, res:Response, next:NextFunction) => {
    // STORING THE USER PAYLOAD FOR AUTHENTICATION 
    const user = req.user;
    if( user ) {
        const existingVandor = await FindVandor(user._id);
        return res.json(existingVandor);
    }

    return res.json({'message': 'VANDOR INFORMATION IS NOT FOUND!'})
}


// VANDOR :: UPDATE PROFILE 
export const UpdateVandorProfile = async(req:Request, res:Response, next:NextFunction) => {
    const user = req.user;

    const { foodType, name, address, phone } = <EditVandorInputs>req.body;

    if(user){
        const existingVandor = await FindVandor(user._id);
        
        if( existingVandor !== null ) {
            existingVandor.name = name;
            existingVandor.address = address;
            existingVandor.phone = phone;
            existingVandor.foodType = foodType;

            const saveResult = await existingVandor.save();
            return res.json(saveResult);
        }
        return res.json({'message': 'VANDOR NOT FOUND!'});
    }
    return res.json({'message': 'UNABLE TO UPDATE THE VANDOR PROFILE!'});
}

// VANDOR :: UPDATE COVER IMAGE 
export const UpdateVandorCoverImage = async(req:Request, res:Response, next:NextFunction) => {
    const user = req.user;
    if ( user ) {
        const vandor = await FindVandor(user._id);
        if ( vandor !== null ) {
            const files = req.files as [Express.Multer.File]
            const images = files.map((file: Express.Multer.File) => file.filename);
            vandor.coverImages.push(...images);
            const result = await vandor.save();

            return res.json(result);
        }
    }
}

// VANDOR :: UPDATE SERVICE 
export const UpdateVandorService = async(req:Request, res:Response, next:NextFunction) => {
    const user = req.user;
    if ( user ) {
        const existingVandor = await FindVandor(user._id);
        
        if ( existingVandor !== null ) {
            existingVandor.serviceAvailable = !existingVandor.serviceAvailable;
            const saveResult = await existingVandor.save();
            return res.json(saveResult);
        }
        return res.json(existingVandor);
    }
    return res.json({'message' : "VANDOR INFORMATION NOT FOUND!"})
}

// VANDOR :: FOOD 
export const AddFood = async(req:Request, res:Response, next:NextFunction) => {
    const user = req.user;
    if ( user ) {
        const { name, description, category, foodType, readyTime, price } = <CreateFoodInputs>req.body;
        const vandor = await FindVandor(user._id);

        if ( vandor !== null ) {
            const files = req.files as [Express.Multer.File];
            const images = files.map((file: Express.Multer.File) => file.filename);

            const createdFood = await Food.create({
                vandorId: vandor._id,
                name: name,
                description: description,
                category: category,
                foodType: foodType,
                images: images,
                readyTime: readyTime,
                price: price,
                rating: 0
            })
            vandor.foods.push(createdFood);
            const result = await vandor.save();
            return res.json(result);
        }
    }
    return res.json({"message" : "SOMETHING WENT WRONG FOR ADDING FOODS!"})
}

// VANDOR :: GETFOOD 
export const GetFoods = async ( req:Request, res:Response, next:NextFunction ) => {
    const user = req.user;
    if ( user ) {
        const foods = await Food.find({ vandorId: user._id });

        if ( foods !== null ) {
            return res.json(foods);
        }
    }
    return res.json({"message" : "FOODS INFORMATION IS NOT FOUND!"})
}   