"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = require("express");
const project_controller_1 = require("../controllers/project_controller");
const projectRoutes = (0, express_1.Router)();
exports.projectRoutes = projectRoutes;
projectRoutes.post('/projects', project_controller_1.createProject); // crear plant
projectRoutes.get('/projects', project_controller_1.getProjects); // Consultar planetas o plante nombre query params
projectRoutes.get('/projects/:id', project_controller_1.getProjectsById); // Consultar planeta por Id query params
projectRoutes.put('/projects', project_controller_1.updateProject); // Modificar planeta por nombre query params
projectRoutes.delete('/projects', project_controller_1.deleteProject); // Eliminar planeta por query params
