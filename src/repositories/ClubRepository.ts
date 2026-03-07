import { ClubModel } from "../models/ClubModel"
import clubDatabase from "../database/ClubDatabase.json"

export const findAllClubsRepository = async (): Promise<ClubModel[]> => {
    return clubDatabase;
}