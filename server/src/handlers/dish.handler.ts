import { Request, Response } from "express";
import { DishModel } from "../models/dish.model";

const DishHandlers = {

    createDish: async (req: Request, res: Response) => {
        try {
            const newDish = await DishModel.create(req.body);
            return res.status(200).json(newDish);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getAllDishes: async (req: Request, res: Response) => {
        try {
            const dishes = await DishModel.find();
            const activeDishes = dishes.filter((dish) => dish.isActive);
            if (activeDishes.length === 0) {
                return res.status(404).json({ error: 'No active dishes found in DB' });
            }
            return res.status(200).json(activeDishes);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error'});
        }
    },

    getDishById: async (req: Request, res: Response) => {
        try {
            const dish = await DishModel.findById(req.params.id);
            if (!dish || !dish.isActive) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            return res.status(200).json(dish);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    updateDish: async (req: Request, res: Response) => {
        try {
            const updatedDish = await DishModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
            const deletedDish = await DishModel.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
            if(!deletedDish) {
                return res.status(404).json({ error: 'Dish not found' });
            }
            return res.status(200).json(deletedDish);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export default DishHandlers;