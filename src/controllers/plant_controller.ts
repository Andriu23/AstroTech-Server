import { Request, Response } from "express"
import { dbConnection } from "../db/mongo_connect";
import { ObjectId } from "mongodb";

export const createPlant = async (req: Request, res: Response):  Promise<Response> => {
    try {
        const data = req.body;
        const collection = await dbConnection('plants');
        const document = await collection.insertOne(data);    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al insertar el documento ${error}`});
    }
};

export const getPlants = async (req: Request, res: Response):  Promise<Response> => {
    try {
        const query = req.query;
        const collection = await dbConnection('plants');
        const filteredDocs = await collection.find(query).toArray();    
        return res.status(200).json(filteredDocs);
    } catch (error) {
        return res.status(500).json({messge: `Error al buscar los documentos ${error}`});
    }
};

export const getPlantsById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const plantId = req.params.id;
        const collection = await dbConnection('plants');
        const document = await collection.findOne({_id : new ObjectId(plantId)});    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al buscar el documento ${error}`});
    }
};

export const updatePlant = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.query;
        const plantData = req.body;
        const collection = await dbConnection('plants');
        const document = await collection.updateOne(query, { $set: plantData});    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al actualizar el documento ${error}`});
    }
};

export const deletePlant = async (req: Request, res: Response): Promise<Response> => {
    try {
        const plantId = req.params.id;
        const collection = await dbConnection('plants');
        const document = await collection.deleteOne({_id : new ObjectId(plantId)});    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al eliminar el documento ${error}`});
    }
}; 