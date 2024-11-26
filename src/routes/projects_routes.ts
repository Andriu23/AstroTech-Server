import { Router } from "express";
import { createProject, deleteProject, getProjects, getProjectsById, updateProject } from "../controllers/project_controller";

const projectRoutes = Router();

projectRoutes.post('/projects', createProject); 
projectRoutes.get('/projects', getProjects);
projectRoutes.get('/projects/:id', getProjectsById); 
projectRoutes.put('/projects', updateProject); 
projectRoutes.delete('/projects/:id', deleteProject); 


export {projectRoutes};