import { Request, Response } from "express";

export class BaseRoute {

    constructor(app) {
        app.get('/', (req: Request, res: Response, next: Function) => {
            res.render('pages/index');
        });
    }
   

    public responseNext(result, res) {
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    }

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