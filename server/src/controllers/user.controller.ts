import { Request, Response } from "express";
import userHandler from "../handlers/user.handler";
import * as jwt from 'jsonwebtoken';

const secretKey: string = `${process.env.SECRET_KEY}`;

const userControllers = {

    createUser: async (req: Request, res: Response) => {
        try {
            const newUser = await userHandler.createUser(req.body);
            return res.status(200).json(newUser);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getAllUsers: async (req: Request, res: Response) => {
        try {
            const useres = await userHandler.getAllUseres();
            if (useres.length === 0) {
                return res.status(404).json({ error: 'No active useres found in DB' });
            }
            return res.status(200).json(useres);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error'});
        }
    },

    getUserById: async (req: Request, res: Response) => {
        try {
            const user = await userHandler.getUserById(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getUserByEmail: async (req: Request, res: Response) => {
        try {
            const user = await userHandler.getUserByEmail(req.params.email);
            if(!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    checkPassword: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const user = await userHandler.checkPassword(email, password);
            if(!user || password !== user.password){
                return res.status(401).json({ error: 'Invalid email or password' });
            }
            const token = jwt.sign({ email: user.email, userID: user._id}, secretKey, { expiresIn: '1h' });
            return res.status(200).json({ token });
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    updateUser: async (req: Request, res: Response) => {
        try {
            const updatedUser = await userHandler.updateUser(req.params.id, req.body);
            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const deletedUser = await userHandler.deleteUser(req.params.id);
            if(!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(deletedUser);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

export default userControllers;