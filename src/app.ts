import express from "express";
import router from "./routes";

function createApp(){

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", router)

    return app;
}

export default createApp;