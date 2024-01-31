import { Request, Response } from "express";
import RestaurantHandler from "../handlers/restaurant.handler";

const RestaurantController = {
    createRestaurant: async (req: Request, res: Response) => {
        try {
            const newRestaurant = await RestaurantHandler.createRestaurant(req.body);
            return res.status(200).json(newRestaurant);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getAllRestaurants: async (req: Request, res: Response) => {
        try {
            const restaurants = await RestaurantHandler.getAllRestaurants();
            if (restaurants.length === 0) {
                return res.status(404).json({ error: 'No active restaurants found in DB' });
            }
            return res.status(200).json(restaurants);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getAllRestaurantsByRating: async (req: Request, res: Response) => {
        try {
            const restaurants = await RestaurantHandler.getAllRestaurants();
            if (restaurants.length === 0) {
                return res.status(404).json({ error: 'No active restaurants found in DB' });
            }
            const sortedRestaurants = restaurants.sort((a, b) => b.rating - a.rating);
            return res.status(200).json(sortedRestaurants)
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getAllRestaurantsPaginated: async (req: Request, res: Response) => {
        try {
            let page: number = typeof req.query.p === 'string' ? parseInt(req.query.p, 10) : 0;
            const restaurantsPerPage: number = 3;
            const restaurants = await RestaurantHandler.getAllRestaurantsPaginated(page, restaurantsPerPage);
            if (restaurants.length === 0) {
                return res.status(404).json({ error: 'No active restaurants found in DB' });
            }
            return res.status(200).json(restaurants);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getRestaurantById: async (req: Request, res: Response) => {
        try {
            const restaurant = await RestaurantHandler.getRestaurantById(req.params.id);
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
            const updatedRestaurant = await RestaurantHandler.updateRestaurant(req.params.id, req.body);
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
            const deletedRestaurant = await RestaurantHandler.deleteRestaurant(req.params.id);
            if (!deletedRestaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }
            return res.status(200).json(deletedRestaurant);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export default RestaurantController;
