import {Router} from "express";
import { deletePlayerController, getPlayerByIdController, getPlayerController, postPlayerController, updatePlayerController } from "./controllers/PlayerController";
import { getClubsController } from "./controllers/ClubController";

const router = Router();

router.get("/players", getPlayerController);
router.get("/players/:id", getPlayerByIdController);
router.post("/players", postPlayerController);
router.delete("/players/:id", deletePlayerController);
router.patch("/players/:id", updatePlayerController);

router.get("/clubs", getClubsController);
export default router;