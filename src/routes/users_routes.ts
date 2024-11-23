import { Router } from "express";
import { createUser, getUsers } from "../controllers/users_controller";


const usersRoutes = Router();

usersRoutes.post('/users', createUser); 
usersRoutes.post('/getUsers', getUsers); 


export {usersRoutes};