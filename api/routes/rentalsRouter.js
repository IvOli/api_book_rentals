import express from "express";

/*Instanciamos el metodo Router de express, con el cual podemos tener un enrutador de cada archivo */
const rentalsRouter = express.Router();

rentalsRouter.get('/',  (req, res)=>{
    
    res.send('Rentals')
} )

export { rentalsRouter };