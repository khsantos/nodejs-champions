import { findAllClubsRepository } from "../repositories/ClubRepository";
import * as HttpResponse from "../utils/http-helper";

export const getClubsService = async () => {
    const data = await findAllClubsRepository();

    const response = HttpResponse.ok(data);
    return response;
}
