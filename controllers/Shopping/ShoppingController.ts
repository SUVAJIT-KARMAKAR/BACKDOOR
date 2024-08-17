// CONTROLLER :: SHOPPING 
import express, { Request, Response, NextFunction } from 'express';
import { Vandor } from '../../models';

// FOOD-AVAILABILITY 
export const GetFoodAvailability = async( req:Request, res:Response, next:NextFunction ) => {
    const pincode = req.params.pincode;
    const result = await Vandor.find({pincode: pincode, serviceAvailable: false})
    .sort([['rating', 'descending']])
    .populate("foods")

    if ( result.length > 0 ) {
        return res.status(200).json(result);
    }
    return res.status(400).json({"message" : "DATA IS NOT FOUND!"});
}

// GET-TOP-RESTAURANTS 
export const GetTopRestaurants = async( req:Request, res:Response, next:NextFunction ) => {

}

// GET-FOOD-IN-30-MINUTES
export const GetFoodIn30Min = async( req:Request, res:Response, next:NextFunction ) => {

}

// SEARCH-FOODS
export const SearchFoods = async( req:Request, res:Response, next:NextFunction ) => {

}

// RESTAURANT-BY-ID
export const RestaurantById = async( req:Request, res:Response, next:NextFunction ) => {

}