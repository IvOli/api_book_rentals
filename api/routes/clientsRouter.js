import express from "express";

/*Instanciamos el metodo Router de express, con el cual podemos tener un enrutador de cada archivo */
const clientsRouter = express.Router();

clientsRouter.get('/',  (req, res)=>{
    
    res.send('Clients')
} )

export { clientsRouter };