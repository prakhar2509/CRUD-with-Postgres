import { Router } from "express";
import { createUsers, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/user.Controllers.js";
import validateUser from "../middlewares/inputValidator.js";

const userRouter = Router();

userRouter.post('/user', validateUser, createUsers);
userRouter.get('/user/', getAllUsers);
userRouter.get('/user/:id', getUserById);
userRouter.put('/user/:id', validateUser, updateUser);
userRouter.delete('/user/:id', deleteUser);

export default userRouter;