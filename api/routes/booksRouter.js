import express from "express";
import booksController from "../controllers/booksController.js"
import { bookSchema } from "../middleware/schemas/bookSchema.js";
import { isValid } from "../utils/isValidated.js"
/*Instanciamos el metodo Router de express, con el cual podemos tener un enrutador de cada archivo */
const booksRouter = express.Router();

booksRouter.get('/', booksController.getBooks)

booksRouter.post('/', isValid(bookSchema), booksController.createBook)
booksRouter.put('/:id',  (req, res)=>{
    const { id } = req.params;

    res.send(id)
} )
booksRouter.delete('/:id',  (req, res)=>{
    const { id } = req.params;
    res.send(id)
} )

export { booksRouter };