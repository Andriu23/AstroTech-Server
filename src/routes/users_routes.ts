import { Router } from "express";
import { createUser, getUsers } from "../controllers/users_controller";


const usersRoutes = Router();

usersRoutes.post('/users', createUser); // crear plant
usersRoutes.get('/users', getUsers); // Consultar planetas o plante nombre query params


export {usersRoutes};