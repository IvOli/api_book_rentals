import express from "express";
import { getClients, getClientsByName } from "../controllers/clientsController.js";

/*Instanciamos el metodo Router de express, con el cual podemos tener un enrutador de cada archivo */
const clientsRouter = express.Router();

clientsRouter.get('/',  getClients )
clientsRouter.get('/:name',  getClientsByName)

export { clientsRouter };