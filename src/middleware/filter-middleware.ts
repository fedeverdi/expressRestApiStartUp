import { findClass } from "../interface/find.class";

/**
 * Questo middleware si occupa di filtrare le rotte in cui è usato per i parametri inseriti nel querystring, e allo stesso tempo
 * legge dal parametro 'columns' la lista delle colonne da inserire nella query. La options su cui fare la ricerca viene appesa
 * alla request usando la proprietà 'findOptions'
 */
export class filterMiddleware {

    constructor(app) {
        app.use(['/users'], (request, response, next) => {
            
            // Recupero un'istanza della findCLass
            let options = new findClass();
            
            // Se è presente roba nel querystring
            if(request.query) {
    
                // Se è presente l'array con le colonne visualizzabili lo setto.
                if(request.query.columns) {
                    
                    // Setto la select dalla proprietà columns del querystring
                    options.select = request.query.columns.split(',');
                    
                    // Fatto questo svuoto il campo
                    request.query.columns = null;
                }
    
                // Il resto della request.query la uso come where
                options.where = request.query;
            }

            // Appendo il tutto alla request per poterla riprendere successivamente
            request.findOptions = options;

           next();
        });
    }
}

