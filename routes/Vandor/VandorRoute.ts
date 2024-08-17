// ROUTES :: VANDOR 
import express, { Request, Response, NextFunction } from 'express';

import { AddFood, GetFoods, UpdateVandorCoverImage, UpdateVandorProfile } from '../../controllers';
import { GetVandorProfile } from '../../controllers';
import { UpdateVandorService } from '../../controllers';
import { VandorLogin } from '../../controllers';

import { Authenticate } from '../../middlewares';

import multer from 'multer';

// MULTER :: IMAGE STORAGE SERVICE 
const imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images')
    }, filename: function(req, file, cb) {
        cb(null, new Date().toISOString()+'_'+file.originalname)
    }
})

const images = multer({ storage: imageStorage }).array('images', 10);


// ROUTER
const router = express.Router();

// VANDOR :: LOGIN
router.post('/login', VandorLogin);

// VANDOR :: PROFILE 
router.use(Authenticate);
router.get('/profile', GetVandorProfile);
router.patch('/profile', UpdateVandorProfile);
router.patch('/coverimage', images, UpdateVandorCoverImage);

// VANDOR :: SERVICE
router.patch('/service', UpdateVandorService);

// VANDOR :: FOOD   
router.post('/addfood', images, AddFood);
router.get('/allfoods', GetFoods);

router.use('/', (req:Request, res:Response, next:NextFunction) => {
    res.json( {message: "HELLO FROM THE VANDOR!"} );
})

// EXPORT
export { router as VandorRoute };