// ROUTES :: VANDOR 
import express, { Request, Response, NextFunction } from 'express';
import { UpdateVandorProfile, GetVandorProfile, UpdateVandorService, VandorLogin } from '../controllers';
import { Authenticate } from '../middlewares';

// ROUTER
const router = express.Router();

// VANDOR :: LOGIN
router.post('/login', VandorLogin);
// VANDOR :: PROFILE 
router.use(Authenticate);
router.patch('/profile', UpdateVandorProfile);
router.get('/profile', GetVandorProfile);
router.patch('/profile',UpdateVandorService);
// VANDOR :: SERVICE
router.patch('/service', UpdateVandorService);

router.use('/', (req:Request, res:Response, next:NextFunction) => {
    res.json( {message: "HELLO FROM THE VANDOR!"} );
})

// EXPORT
export { router as VandorRoute };