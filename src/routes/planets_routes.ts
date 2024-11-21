import { Router } from "express";
import { createPlant, deletePlant, getPlants, getPlantsById, updatePlant } from "../controllers/plant_controller";


const plantRoutes = Router();

plantRoutes.post('/plants', createPlant); // crear plant
plantRoutes.get('/plants', getPlants); // Consultar planetas o plante nombre query params
plantRoutes.get('/plants/:id', getPlantsById); // Consultar planeta por Id query params
plantRoutes.put('/plants', updatePlant); // Modificar planeta por nombre query params
plantRoutes.delete('/plants', deletePlant); // Eliminar planeta por query params


export {plantRoutes};