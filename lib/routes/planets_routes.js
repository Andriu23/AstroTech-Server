"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantRoutes = void 0;
const express_1 = require("express");
const plant_controller_1 = require("../controllers/plant_controller");
const plantRoutes = (0, express_1.Router)();
exports.plantRoutes = plantRoutes;
plantRoutes.post('/plants', plant_controller_1.createPlant); // crear plant
plantRoutes.get('/plants', plant_controller_1.getPlants); // Consultar planetas o plante nombre query params
plantRoutes.get('/plants/:id', plant_controller_1.getPlantsById); // Consultar planeta por Id query params
plantRoutes.put('/plants', plant_controller_1.updatePlant); // Modificar planeta por nombre query params
plantRoutes.delete('/plants/:id', plant_controller_1.deletePlant); // Eliminar planeta por query params
