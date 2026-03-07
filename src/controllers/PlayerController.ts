import {Request, Response} from "express";
import { deletePlayerService, getPlayerByIdService, getPlayerService, postPlayerService, updatePlayerService } from "../services/PlayerService";
import { noContent } from "../utils/http-helper";
import { StatisticsModel } from "../models/StatisticsModel";

export const getPlayerController = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerByIdController = async (req: Request, res: Response) => {
    const paramId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const id = Number(paramId);
    
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid player ID" });
    }
    
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayerController = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await postPlayerService(bodyValue);

    if(httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    }
}

export const deletePlayerController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const httpResponse = await deletePlayerService(id);

    if(httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    }
}

export const updatePlayerController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const bodyValue: StatisticsModel = req.body;
    const httpResponse = await updatePlayerService(id, bodyValue);
    
    if(httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
    else {        const response = await noContent();
        res.status(response.statusCode).json(response.body);
    }
}