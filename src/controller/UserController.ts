import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    /**
     * Ritorno tutti gli utenti
     * @param request 
     * @param response 
     * @param next 
     */
    async all(request: Request, response: Response, next: NextFunction) {
        const query = this.userRepository;
        return query.find(request.findOptions);
    }

    /**
     * Ritorno un utente
     * @param request 
     * @param response 
     * @param next 
     */
    async one(request: Request, response: Response, next: NextFunction) {
        try {
            let user = await this.userRepository.findOne(request.params.id);
                
            if(user) {
                response.status(200).json(user);
                return;
            } else {
                response.status(404).json({error: "Utente non trovato"});
                return;
            }
        } catch (error) {
           next(error);
        }
    }

    /**
     * Salvo un utente
     * @param request 
     * @param response 
     * @param next 
     */
    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    /**
     * Cancello un utente
     * @param request 
     * @param response 
     * @param next 
     */
    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}