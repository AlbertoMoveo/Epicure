import { Request, Response } from "express";
import { RestaurantModel } from "../models/restaurant.model";

const RestaurantHandlers = {

    createRestaurant: async (req: Request, res: Response) => {
        try {
            const newRestaurant = await RestaurantModel.create(req.body);
            return res.status(200).json(newRestaurant);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getAllRestaurants: async (req: Request, res: Response) => {
        try {
            const restaurants = await RestaurantModel.find();
            const activeRestaurants = restaurants.filter((restaurant) => restaurant.isActive);
            if (activeRestaurants.length === 0) {
                return res.status(404).json({ error: 'No active restaurants found in DB' });
            }
            return res.status(200).json(activeRestaurants);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getRestaurantById: async (req: Request, res: Response) => {
        try {
            const restaurant = await RestaurantModel.findById(req.params.id);
            if (!restaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }
            return res.status(200).json(restaurant);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    updateRestaurant: async (req: Request, res: Response) => {
        try {
            const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedRestaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }
            return res.status(200).json(updatedRestaurant);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    deleteRestaurant: async (req: Request, res: Response) => {
        try {
            const deletedRestaurant = await RestaurantModel.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
            if(!deletedRestaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }
            return res.status(200).json(deletedRestaurant);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export default RestaurantHandlers;