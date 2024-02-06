import { Request, Response } from "express";
import ChefHandler from "../handlers/chef.handler";

const ChefController = {
    createChef: async (req: Request, res: Response) => {
        try {
            const newChef = await ChefHandler.createChef(req.body);
            return res.status(200).json(newChef);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getAllChefs: async (req: Request, res: Response) => {
        try {
            const chefs = await ChefHandler.getAllChefs();
            if (chefs.length === 0) {
                return res.status(404).json({ error: 'No active chefs in DB' });
            }
            return res.status(200).json(chefs);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getChefById: async (req: Request, res: Response) => {
        try {
            const chef = await ChefHandler.getChefById(req.params.id);
            if (!chef) {
                return res.status(404).json({ error: 'Chef not found' });
            }
            return res.status(200).json(chef);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    updateChef: async (req: Request, res: Response) => {
        try {
            const updatedChef = await ChefHandler.updateChef(req.params.id, req.body);
            if (!updatedChef) {
                return res.status(404).json({ error: 'Chef not found' });
            }
            return res.status(200).json(updatedChef);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    deleteChef: async (req: Request, res: Response) => {
        try {
            const deletedChef = await ChefHandler.deleteChef(req.params.id);
            if (!deletedChef) {
                return res.status(404).json({ error: 'Chef not found' });
            }
            return res.status(200).json(deletedChef);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export default ChefController;
