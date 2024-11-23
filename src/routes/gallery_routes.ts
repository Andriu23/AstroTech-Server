import { Router } from "express";
import { createGallery, deleteGallery, getGallery, getGalleryById, updateGallery } from "../controllers/gallery_controller";

const galleryRoutes = Router();

galleryRoutes.post('/gallery', createGallery);
galleryRoutes.get('/gallery', getGallery); 
galleryRoutes.get('/gallery/:id', getGalleryById); 
galleryRoutes.put('/gallery', updateGallery);
galleryRoutes.delete('/gallery', deleteGallery); 


export {galleryRoutes};