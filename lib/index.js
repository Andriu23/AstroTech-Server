"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const planet_routes_1 = require("./routes/planet_routes");
const project_routes_1 = require("./routes/project_routes");
const contact_routes_1 = require("./routes/contact_routes");
const gallery_routes_1 = require("./routes/gallery_routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', gallery_routes_1.galleryRoutes);
app.use('/api', planet_routes_1.plantRoutes);
app.use('/api', project_routes_1.projectRoutes);
app.use('/api', contact_routes_1.contactRoutes);
app.listen(port, () => {
    console.log(`Estoy corriendo en el puerto ${port}`);
});
