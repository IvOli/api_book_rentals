import express from "express";
import { routerApi } from "./routes/index.js";

const api= express();
api.use(express.json());

routerApi(api)

export { api }