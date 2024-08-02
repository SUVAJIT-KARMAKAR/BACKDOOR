// ROUTES :: VANDOR 
import express, { Request, Response, NextFunction } from 'express';

// ROUTER
const router = express.Router();

router.use('/', (req:Request, res:Response, next:NextFunction) => {
    res.json( {message: "HELLO FROM THE VANDOR!"} );
})

// EXPORT
export { router as VandorRoute };