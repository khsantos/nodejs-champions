import { StatisticsModel } from "../models/StatisticsModel";
import { deletePlayerRepository, findAllPlayersRepository, findAndUpdatePlayerRepository, findPlayerByIdRepository, insertPlayerRepository } from "../repositories/PlayerRepository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await findAllPlayersRepository();
    let response = null;

    if(data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await findPlayerByIdRepository(id);
    let response = null;

    if(data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}

export const postPlayerService = async (player: PlayerModel) => {
    let response = null;

    if(Object.keys(player).length !== 0) {
        response = await insertPlayerRepository(player);
        console.log("Player inserted:");
        return await HttpResponse.created();
    } else {
        return HttpResponse.badRequest();
    }
}

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await deletePlayerRepository(id)
    if(isDeleted) {
        response = await HttpResponse.deleted();
        console.log("Player deleted:");
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await findAndUpdatePlayerRepository(id, statistics)
    let response = null;

    if(!data.statistics || Object.keys(data.statistics).length === 0) {
        response =  HttpResponse.badRequest();
        return response;
    } else {
        response = await HttpResponse.ok(data);
        console.log("Player updated:");
        return response;
    }
}
    
