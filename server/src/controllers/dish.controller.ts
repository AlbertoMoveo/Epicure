import { Request, Response } from "express";
import DishHandler from "../handlers/dish.handler";

const DishControllers = {

    createDish: async (req: Request, res: Response) => {
        try {
            const newDish = await DishHandler.createDish(req.body);
            return res.status(200).json(newDish);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getAllDishes: async (req: Request, res: Response) => {
        try {
            const dishes = await DishHandler.getAllDishes();
            if (dishes.length === 0) {
                return res.status(404).json({ error: 'No active dishes found in DB' });
            }
            return res.status(200).json(dishes);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error'});
        }
    },

    getDishById: async (req: Request, res: Response) => {
        try {
            const dish = await DishHandler.getDishById(req.params.id);
            if (!dish) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            return res.status(200).json(dish);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    updateDish: async (req: Request, res: Response) => {
        try {
            const updatedDish = await DishHandler.updateDish(req.params.id, req.body);
            if (!updatedDish) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            return res.status(200).json(updatedDish);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    deleteDish: async (req: Request, res: Response) => {
        try {
            const deletedDish = await DishHandler.deleteDish(req.params.id);
            if(!deletedDish) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            return res.status(200).json(deletedDish);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export default DishControllers;
