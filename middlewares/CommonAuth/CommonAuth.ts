// MIDDLEWARE :: COMMONAUTH
import { Request, NextFunction, Response } from 'express';
import { AuthPayload } from '../../dto/Auth/Auth.dto';
import { ValidateSignature } from '../../utility/PasswordUtility/PasswordUtility';

declare global {
    namespace Express {
        interface Request {
            user ? : AuthPayload;
        }
    }
}


// AUTHENTICATION 
export const Authenticate = async (req:Request, res:Response, next:NextFunction) => {
    const signature = await ValidateSignature(req);
    
    if(signature){
        next();
    } else {
        return res.status(401).json({message: "USER IS NOT AUTHORIZED TO ACCESS"});
    }
}

