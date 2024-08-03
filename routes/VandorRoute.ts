// ROUTES :: VANDOR 
import express, { Request, Response, NextFunction } from 'express';
import { GetVandorProfile, UpdateVandorService, VandorLogin } from '../controllers';

// ROUTER
const router = express.Router();

// VANDOR :: LOGIN
router.post('/login', VandorLogin);
// VANDOR :: PROFILE 
router.get('/profile', GetVandorProfile)
router.patch('/profile',UpdateVandorService);
// VANDOR :: SERVICE
router.patch('/service', UpdateVandorService);

router.use('/', (req:Request, res:Response, next:NextFunction) => {
    res.json( {message: "HELLO FROM THE VANDOR!"} );
})

// EXPORT
export { router as VandorRoute };