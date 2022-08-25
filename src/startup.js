import express from "express";
import controller from "./controllers/controller.js";

const startup = express();
startup.use(express.json());

controller(startup);

export default startup;