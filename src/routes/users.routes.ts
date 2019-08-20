import { UserController } from "../controller/UserController";
import { Request, Response } from "express";
import { BaseRoute } from "./base.routes";

export class UsersRoute extends BaseRoute {

    constructor(app) {
        super(app);
        /**
         * @swagger
         *
         * /users:
         *   get:
         *     tags:
         *       - Users
         *     description: Restituisce la lista degli utenti
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         description: users
         */
        app.get('/users', (req: Request, res: Response, next: Function) => {
            const result = new UserController().all(req, res, next);
            this.responseNext(result, res);
        });

        /**
         * @swagger
         *
         * /user/{id}:
         *   get:
         *     tags:
         *       - Users
         *     description: Restituisce il singolo utente
         *     produces:
         *       - application/json
         *     parameters:
         *       - id: username
         *         description: id dell'utente
         *         in: path
         *         required: true
         *         type: integer
         *     responses:
         *       200:
         *         description: user
         */
        app.get('/user/:id', (req: Request, res: Response, next: Function) => {
            const result = new UserController().one(req, res, next);
            this.responseNext(result, res);
        });

        /**
         * @swagger
         *
         * /user:
         *   post:
         *     tags:
         *       - Users
         *     description: Creo un utente
         *     produces:
         *       - application/json
         *     parameters:
         *       - name: user
         *         description: User object
         *         in:  body
         *         required: true
         *         type: string
         *         schema:
         *           $ref: '#/definitions/User'
         *     responses:
         *       200:
         *         description: user
         */
        app.post('/user', (req: Request, res: Response, next: Function) => {
            const result = new UserController().save(req, res, next);
            this.responseNext(result, res);
        });

        /**
         * @swagger
         *
         * /user/{id}:
         *   delete:
         *     tags:
         *       - Users
         *     description: Elimina un utente
         *     produces:
         *       - application/json
         *     parameters:
         *       - id: username
         *         description: id dell'utente
         *         in: path
         *         required: true
         *         type: integer
         *     responses:
         *       200:
         *         description: Utente eliminato
         */
        app.delete('/user/:id', (req: Request, res: Response, next: Function) => {
            const result = new UserController().remove(req, res, next);
            this.responseNext(result, res);
        });
        /**
         * @swagger
         * definitions:
         *   User:
         *     type: object
         *     required:
         *       - username
         *       - password
         *     properties:
         *       username:
         *         type: string
         *       password:
         *         type: string
         *         format: password
         */
    }


}