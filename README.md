# Node Express Startup Rest API

Il progetto include le seguenti funzionalità:

* Autenticazione JWT con "express-jwt"
* Connessione di esempio a database MySql
* Documentazione Swagger automatica con "swagger-ui-express" e "swagger-jsdoc"
* ORM preinstallato ("typeorm")

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

6. Laciare le migration per creare la tabella utenti e l'utente admin di prova

```
  # npm run typeorm migration:run    
```

7. Lanciare il server

```
  # npm run start
```
( Opzionalmnete è possibile lanciare il progetto in "watching" )

```
  # npm run watch
```
