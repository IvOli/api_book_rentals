import express from "express";
import { editUser, saveUser } from "../controllers/usersController.js";
import { userSchema } from "../middleware/schemas/userSchema.js";
import { isValid } from "../utils/isValidated.js";

/*Instanciamos el metodo Router de express, con el cual podemos tener un enrutador de cada archivo */
const usersRouter = express.Router();

usersRouter.post('/', isValid(userSchema), saveUser )
usersRouter.post('/:id', isValid(userSchema), editUser )

export { usersRouter };