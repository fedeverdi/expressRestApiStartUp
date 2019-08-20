import * as swaggerUi from 'swagger-ui-express';

const swaggerJsdoc = require('swagger-jsdoc');



export class swaggerMiddleware {

   
    constructor(app) {
      const options = {
        swaggerDefinition: {
          // Like the one described here: https://swagger.io/specification/#infoObject
          info: {
            title: 'Rest API',
            version: '1.0.0',
            description: 'Micro REST api service',
            license: {
              "name": "MIT",
              "url": "https://opensource.org/licenses/MIT"
            }
          },
          openapi: "3.0.2",
          servers: [
            {
                "url": "/",
                "description": "Server principale"
            }
          ],
        },
        host: "127.0.0.1",
        basePath: "/",
        // List of files to be processes. You can also set globs './routes/*.js'
        apis: ['src/routes/*.ts'],
      };
      
      const specs = swaggerJsdoc(options);
      
      app.get('/api-docs.json', function(req, res) { // line 41
        res.send(specs);
      });

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    }

}

