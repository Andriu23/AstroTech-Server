import { Router } from "express";
import { createPlant, deletePlant, getPlants, getPlantsById, updatePlant } from "../controllers/plant_controller";
import { authenticateToken } from "../middlewars/users_middlewars";


const plantRoutes = Router();

plantRoutes.post('/plants', authenticateToken, createPlant); // crear plant
plantRoutes.get('/plants', getPlants); // Consultar planetas o plante nombre query params
plantRoutes.get('/plants/:id', authenticateToken, getPlantsById); // Consultar planeta por Id query params
plantRoutes.put('/plants', authenticateToken, updatePlant); // Modificar planeta por nombre query params
plantRoutes.delete('/plants/:id', authenticateToken, deletePlant); // Eliminar planeta por query params


export {plantRoutes};