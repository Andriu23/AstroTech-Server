import { Router } from "express";
import { createContact, getContacts } from "../controllers/contact_controller";

const contactRoutes = Router();

contactRoutes.post('/contacts', createContact); // crear plant
contactRoutes.get('/contacts', getContacts); // Consultar planetas o plante nombre query params


export {contactRoutes};