// ROUTES :: VANDOR 
import express, { Request, Response, NextFunction } from 'express';

import { UpdateVandorProfile } from '../../controllers';
import { GetVandorProfile } from '../../controllers';
import { UpdateVandorService } from '../../controllers';
import { VandorLogin } from '../../controllers';

import { Authenticate } from '../../middlewares';

// ROUTER
const router = express.Router();

// VANDOR :: LOGIN
router.post('/login', VandorLogin);

// VANDOR :: PROFILE 
router.use(Authenticate);
router.get('/profile', GetVandorProfile);
router.patch('/profile', UpdateVandorProfile);

// VANDOR :: SERVICE
router.patch('/service', UpdateVandorService);

// VANDOR :: FOOD   
router.post('/food');
router.get('/foods')

router.use('/', (req:Request, res:Response, next:NextFunction) => {
    res.json( {message: "HELLO FROM THE VANDOR!"} );
})

// EXPORT
export { router as VandorRoute };