import { Router } from "express";
import { createGallery, deleteGallery, getGallery, getGalleryById, updateGallery } from "../controllers/gallery_controller";

const galleryRoutes = Router();

galleryRoutes.post('/gallery', createGallery); // crear plant
galleryRoutes.get('/gallery', getGallery); // Consultar planetas o plante nombre query params
galleryRoutes.get('/gallery/:id', getGalleryById); // Consultar planeta por Id query params
galleryRoutes.put('/gallery', updateGallery); // Modificar planeta por nombre query params
galleryRoutes.delete('/gallery', deleteGallery); // Eliminar planeta por query params


export {galleryRoutes};