import express from "express";
import { plantRoutes } from "./routes/planet_routes";
import { projectRoutes } from "./routes/project_routes"
import { contactRoutes } from "./routes/contact_routes";
import { galleryRoutes } from "./routes/gallery_routes";
import cors from "cors";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', galleryRoutes)
app.use('/api', plantRoutes);
app.use('/api', projectRoutes);
app.use('/api', contactRoutes);

app.listen(port, () => {
    console.log(`Estoy corriendo en el puerto ${port}`);
});