# Node Express Startup Rest API (Typescript)

Il progetto include le seguenti funzionalità:

* Autenticazione JWT con "express-jwt"
* Connessione di esempio a database MySql
* Documentazione Swagger automatica con "swagger-ui-express" e "swagger-jsdoc"
* ORM preinstallato ("typeorm")
* Validazione rotte API con 'express-validator'

### Installazione

1. Clonare la repo:

```
  # git clone https://github.com/fedeverdi/expressRestApiStartUp.git
```

2. Rimuovere la folder .git

```
  # cd expressRestApiStartUp
  # rm -R .git
```

3. Installare i pacchetti NPM

```
  # npm install
```

4. Creare il proprio file di configurazione .env copiando o rinominando l'esempio nella repo
5. Creare il file di configurazione per typeOrm ormconfig.json partendo dal file di esempio della repo

6. Creare il database sul proprio server MySql

7. Laciare le migration per creare la tabella utenti e l'utente admin di prova

```
  # npm run typeorm migration:run    
```

8. Lanciare il server

```
  # npm run start
```
( Opzionalmnete è possibile lanciare il progetto in "watching" )

```
  # npm run watch
```


## Documentazioni e librerie utilizzate

* TypeOrm - [Vai alla documentazione](https://typeorm.io/#/)
* Express Validator - [Vai alla documentazione](https://express-validator.github.io/docs/index.html)
* Swagger UI Express - [Vai alla Repo](https://github.com/scottie1984/swagger-ui-express)
* Express JWT - [Vai alla Repo](https://github.com/auth0/express-jwt)
