// ROUTES :: ADMIN 
import express, { Request, Response, NextFunction } from 'express';
import { CreateVandor, GetVandorByID, GetVandors } from '../controllers';

// ROUTER
const router = express.Router();

// POST :: CREATING VANDOR
router.post('/createvandor', CreateVandor);
// GET :: GETTING VANDOR
router.get('/allvandors', GetVandors);
// GET :: GETTING VANDOR BY ID
router.get('/vandor/:id', GetVandorByID);

router.use('/', (req:Request, res:Response, next:NextFunction) => {
    res.json( {message: "HELLO FROM THE ADMIN!"} );
});


// EXPORT
export { router as AdminRoute };