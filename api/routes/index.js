import { booksRouter } from "./booksRouter.js";
import { clientsRouter } from "./clientsRouter.js";
import { rentalsRouter } from "./rentalsRouter.js";
import { usersRouter } from "./usersRouter.js";




function routerApi(api) {
    api.use('/books', booksRouter ),
    api.use('/register', usersRouter ),
    api.use('/rentals', rentalsRouter ),
    api.use('/clients', clientsRouter )
}

export { routerApi };