import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export class AuthController {

    private userRepository = getRepository(User);

    /**
     * Metodo di Login
     * @param request 
     * @param response 
     * @param next 
     */
    async login(request: Request, response: Response, next: NextFunction) {
        
        try {
            // Controllo la presenza dell'utente
            let user = await this.userRepository.findOne({
                select: ['id', 'firstName', "lastName", "username", "password" ],
                where: { username: request.body.username }
            });
            
            // Se trovo l'utente e la password coincide
            if(user && bcrypt.compareSync(request.body.password, user.password)) {
                // Ritorno il token
                let token = jwt.sign({ user: user.id },process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXP });
                response.status(200).json({token: token});
                return;
            } else {
                // Altrimenti ritorno un 401
                response.status(401).json({error: "Credenziali errate"});
                return;
            }            
        } catch (error) {
            next(error);
        }
       
    }

    /**
     * Metodo di registrazione utente
     * @param request 
     * @param response 
     * @param next 
     */
    async register(request: Request, response: Response, next: NextFunction) {

        try {
            // Cerco l'utente passato nel body
            let user = await this.userRepository.findOne({
                username: request.body.username
            });

            // Se lo trovo torno un 409
            if(user) {
                response.status(409).json({error: "Utente già presente in database"});
                return;
            } else {
                // Altrimenti lo creo e lo ritorno nella response
                user = request.body;
                user.password = bcrypt.hashSync(user.password, 10);
                return this.userRepository.save(user);
            }
        } catch (error) {
            next(error);
        }
    }

}