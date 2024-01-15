import { Request, Response } from "express";
import { ChefModel } from "../models/chef.model";

const ChefHandlers = {
    
    createChef: async (req: Request, res: Response) => {
        try {
            const newChef = await ChefModel.create(req.body);
            return res.status(200).json(newChef);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getAllChefs: async (req: Request, res: Response) => {
        try {
            const chefs = await ChefModel.find();
            const activeChefs = chefs.filter((chef) => chef.isActive);
            if (activeChefs.length === 0) {
                return res.status(404).json({ error: 'No active chefs in DB' });
            }
            return res.status(200).json(activeChefs);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getChefById: async (req: Request, res: Response) => {
        try {
            const chef = await ChefModel.findById(req.params.id);
            if (!chef || !chef.isActive) {
                return res.status(404).json({ error: 'Chef not found' });
            }
            return res.status(200).json(chef);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error'});
        }
    },

    updateChef: async (req: Request, res: Response) => {
        try {
            const updatedChef = await ChefModel.findByIdAndUpdate(req.params.id, req.body, { new: true});
            if (!updatedChef) {
                return res.status(404).json({ error: 'Chef not found'});
            }
            return res.status(200).json(updatedChef);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error'});
        }
    },

    deleteChef: async (req: Request, res: Response) => {
        try {
            const deletedChef = await ChefModel.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
            if (!deletedChef) {
                return res.status(404).json({ error: 'Chef not found'});
            }
            return res.status(200).json(deletedChef);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error'});
        }
    }
};

export default ChefHandlers;