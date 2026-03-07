import { Request, Response } from "express";
import { getClubsService } from "../services/ClubService";

export const getClubsController = async (req: Request, res: Response) => {
    const httpResponse = await getClubsService();

    res.status(httpResponse.statusCode).json(httpResponse.body);
}