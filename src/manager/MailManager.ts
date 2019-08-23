import * as nodemailer from 'nodemailer'; 

export class MailManager {

    private _user;
    private _transporter;

    /**
     * Metodo privato di invio mail di test con nodemailer
     */
    private async testEmailSender() {

        try {
           // Creo un test account con "ethereal"
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            this._transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass
                }
            });
        
            // Invio la mail
            let info = await this.sendBody();

            console.log('Messaggio correttamente inviato: %s', info.messageId);

            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));  
        } catch (error) {
            console.log(error);
        }
       
    }

    /**
     * Metodo privato di invio mail di prod con nodemailer
     */
    private async prodEmailSender() {

        try {
            // create reusable transporter object using the default SMTP transport
            this._transporter = nodemailer.createTransport({
                host: process.env.SMTP_SERVER,
                port: Number(process.env.SMTP_PORT),
                secure: (process.env.SMTP_SECURE === "true"),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD
                }
            });
        
            // Invio la mail
            let info = await this.sendBody();
        
            console.log('Messaggio correttamente inviato: %s', info.messageId);
        } catch (error) {
            console.log(error);
        }
       
    }

    /**
     * Invia il body della mail
     */
    private sendBody() {
        let info = this._transporter.sendMail({
            from: '"StartUp Express API App" <info@nodeStartUpApiRest.com>',
            to: this._user.email,
            subject: 'Utente creato', // Subject line
            text: 'Conferma creazione utente', // plain text body
            html: '<b>Conferma creazione utente</b>' // html body
        });

        return info;
    }

    /**
     * Metodo pubblico di invio Email di test
     */
    public sendEmail(user) {

        this._user = user;

        if(process.env.DEBUG === "true") {
            this.testEmailSender();
        } else {
            this.prodEmailSender();
        }
    }

}