// ROUTES :: SHOPPING 
import express from 'express';
// import { Request, Response, NextFunction } from 'express';
import { GetFoodAvailability, GetFoodIn30Min, GetTopRestaurants, RestaurantById, SearchFoods } from '../../controllers';

const router = express.Router();

// FOOD AVAILABILITY 
router.get('/:pincode', GetFoodAvailability);

// TOP RESTAURANTS 
router.get('/top-restaurant/:pincode', GetTopRestaurants);

// FOOD IN 30 MINUTES 
router.get('/foods-in-30/:pincode', GetFoodIn30Min);

// SEARCH FOOD
router.get('/search/:pincode', SearchFoods);

// FIND RESTAURANT BY ID
router.get('/restaurant/:id', RestaurantById);

// EXPORT
export { router as ShoppingRoute };