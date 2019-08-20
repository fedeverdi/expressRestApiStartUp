
import * as jwt from 'express-jwt';

export class jwtMiddle {

    constructor(app) {

        app.use(jwt({ secret: process.env.JWT_SECRET}).unless({path: ['/login', '/api-docs', '/register', '/']}));

        app.use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError') {
            res.status(401).json({ error: 'Token non presente o non valido' });
            }
        });
    }

}