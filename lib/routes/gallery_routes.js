"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.galleryRoutes = void 0;
const express_1 = require("express");
const gallery_controller_1 = require("../controllers/gallery_controller");
const galleryRoutes = (0, express_1.Router)();
exports.galleryRoutes = galleryRoutes;
galleryRoutes.post('/gallery', gallery_controller_1.createGallery); // crear plant
galleryRoutes.get('/gallery', gallery_controller_1.getGallery); // Consultar planetas o plante nombre query params
galleryRoutes.get('/gallery/:id', gallery_controller_1.getGalleryById); // Consultar planeta por Id query params
galleryRoutes.put('/gallery', gallery_controller_1.updateGallery); // Modificar planeta por nombre query params
galleryRoutes.delete('/gallery', gallery_controller_1.deleteGallery); // Eliminar planeta por query params
