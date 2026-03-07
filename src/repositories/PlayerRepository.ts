import { PlayersData } from "../database/PlayerDatabase";
import { StatisticsModel } from "../models/StatisticsModel";


export const findAllPlayersRepository = async (): Promise<PlayerModel[]> => {
    return PlayersData;
}

export const findPlayerByIdRepository = async (id: number): Promise<PlayerModel | undefined> => {
    return PlayersData.find(player => player.id === id);
}

export const insertPlayerRepository = async (player: PlayerModel): Promise<void> => {
    PlayersData.push(player);
}

export const deletePlayerRepository = async (id: number): Promise<Boolean> => {
    const index = PlayersData.findIndex(player => player.id === id);
    
    if(index !== -1) {
        PlayersData.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

export const findAndUpdatePlayerRepository = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const player = await findPlayerByIdRepository(id);

    if(player) {
        player.statistics = statistics;
    } else {
        throw new Error("Player not found");
    }

    return player;
}