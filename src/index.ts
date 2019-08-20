import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {mainRoutes} from "./routes";
import { jwtMiddle } from "./middleware/jwt-middleware";
import { swaggerMiddleware } from "./middleware/swagger-api-middleware";
import { filterMiddleware } from "./middleware/filter-middleware";
import * as path from "path";

createConnection().then(async connection => {

    // Creo l'applicazione express
    const app = express();
    app.use(bodyParser.json());

    // Setto il motore di template per le views
    app.set('view engine', 'ejs');
    // Setto la base folder di ejs nella src del progetto
    app.set('views', path.join(__dirname, '/views'))

    // Instanzio il middleware di Swagger
    new swaggerMiddleware(app);

    // Instanzio il middleware del JWT
    new jwtMiddle(app);

    // Instanzio il middleware del Filter
    new filterMiddleware(app);

    // Registro le rotte dell'applicazione definite in routes.ts
    new mainRoutes(app);

    // Avvio il server di express
    app.listen(process.env.API_TCP_PORT);

    console.log("Express server has started on port " + process.env.API_TCP_PORT + ". Open http://localhost:" + process.env.API_TCP_PORT + " to see results");

}).catch(error => console.log(error));
