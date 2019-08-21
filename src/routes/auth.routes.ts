import { AuthController } from "../controller/AuthController";
import { Request, Response } from "express";
import { BaseRoute } from "./base.routes";
import { check, validationResult } from 'express-validator';

export class AuthRoute extends BaseRoute {

    constructor(app) {
        super(app);

         /**
         * @swagger
         *
         * /login:
         *   post:
         *     tags:
         *       - Auth
         *     description: Login Utente
         *     produces:
         *       - application/json
         *     consumes:
         *       - application/json
         *     requestBody:
         *       description: Oggetto Utente
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/definitions/User'
         *           example:
         *              username: fedeverdi
         *              password: A2l0e1x5
         *     responses:
         *       200:
         *         description: Success
         *         content:
         *           application/json:
         *             schema:
         *               type: object
         *               properties:
         *                 token:
         *                   type: string
         *       401:
         *         description: Success
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/responses/Unauthorized'
         */
        app.post('/login', this.validate(
            [ check('username').exists(),
              check('password').exists() ]),
                (req: Request, res: Response, next: Function) => {      

            const result = new AuthController().login(req, res, next);
            this.responseNext(result, res);
        });

        app.post('/register', this.validate(
            [ check('firstName').exists(),
              check('lastName').exists(),
              check('age').exists(),
              check('username').exists(),
              check('password').exists() ]),
                (req: Request, res: Response, next: Function) => {
            
            const result = new AuthController().register(req, res, next);
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