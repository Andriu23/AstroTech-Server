import { Router } from "express";
import { createUser, getUsers } from "../controllers/users_controller";
import { authenticateToken } from "../middlewars/users_middlewars";


const usersRoutes = Router();

usersRoutes.post('/users', authenticateToken, createUser); 
usersRoutes.post('/getUsers', getUsers); 


export {usersRoutes};