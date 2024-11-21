import { Router } from "express";
import { createProject, deleteProject, getProjects, getProjectsById, updateProject } from "../controllers/project_controller";

const projectRoutes = Router();

projectRoutes.post('/projects', createProject); // crear plant
projectRoutes.get('/projects', getProjects); // Consultar planetas o plante nombre query params
projectRoutes.get('/projects/:id', getProjectsById); // Consultar planeta por Id query params
projectRoutes.put('/projects', updateProject); // Modificar planeta por nombre query params
projectRoutes.delete('/projects', deleteProject); // Eliminar planeta por query params


export {projectRoutes};