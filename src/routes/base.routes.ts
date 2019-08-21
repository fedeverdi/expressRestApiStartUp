import { Request, Response } from "express";
import { validationResult } from 'express-validator';

export class BaseRoute {

    constructor(app) {
        app.get('/', (req: Request, res: Response, next: Function) => {
            res.render('pages/index');
        });
    }
   
    /**
     * Standardizza la response sulle rotte
     * @param result 
     * @param res 
     */
    public responseNext(result, res) {
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    }


    /**
     * Risposta standard per il validatore express-validator usato nelle rotte
     */
    public validate = validations => {
        return async (req, res, next) => {
          await Promise.all(validations.map(validation => validation.run(req)));
      
          const errors = validationResult(req);
          if (errors.isEmpty()) {
            return next();
          }
      
          res.status(422).json({ errors: errors.array() });
        };
      };

    /**
     * @swagger
     * components:
     *   responses:
     *     Unauthorized:
     *       schema:
     *         type: object
     *         properties:
     *           error:
     *           type: string
     *       example:
     *           error: string
     */

}