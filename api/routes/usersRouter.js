import express from "express";

/*Instanciamos el metodo Router de express, con el cual podemos tener un enrutador de cada archivo */
const usersRouter = express.Router();

usersRouter.get('/',  (req, res)=>{
    
    res.send('Users')
} )

export { usersRouter };