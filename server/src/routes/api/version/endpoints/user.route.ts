import { Router } from 'express';
import userControllers from '../../../../controllers/user.controller';
import verifyToken from '../../../../middleware/middleware';

const userRouter = Router();

userRouter.post('/', verifyToken, userControllers.createUser);

userRouter.get('/', verifyToken, userControllers.getAllUsers);

userRouter.get('/:id', verifyToken, userControllers.getUserById);

userRouter.get('/email/:email', verifyToken, userControllers.getUserByEmail);

userRouter.post('/check-password', userControllers.checkPassword);

userRouter.put('/:id', verifyToken, userControllers.updateUser);

userRouter.delete('/:id', verifyToken, userControllers.deleteUser);

export default userRouter;