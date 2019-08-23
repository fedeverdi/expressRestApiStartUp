import * as nodemailer from 'nodemailer'; 

export class MailManager {

    /**
     * Metodo privato di invio mail di test con nodemailer
     * @param user (utente)
     */
    private async testEmailSender(user) {

        try {
           // Creo un test account con "ethereal"
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass
                }
            });
        
            // Invio la mail
            let info = await transporter.sendMail({
                from: '"StartUp Express API App" <info@nodeStartUpApiRest.com>',
                to: user.email,
                subject: 'Utente creato', // Subject line
                text: 'Conferma creazione utente', // plain text body
                html: '<b>Conferma creazione utente</b>' // html body
            });
        
            console.log('Messaggio correttamente inviato: %s', info.messageId);

            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));  
        } catch (error) {
            console.log(error);
        }
       
    }

    /**
     * Metodo privato di invio mail di prod con nodemailer
     * @param user (utente)
     */
    private async prodEmailSender(user) {

        try {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: process.env.SMTP_SERVER,
                port: Number(process.env.SMTP_PORT),
                secure: (process.env.SMTP_SECURE === "true"),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD
                }
            });
        
            // Invio la mail
            let info = await transporter.sendMail({
                from: '"StartUp Express API App" <info@nodeStartUpApiRest.com>',
                to: user.email,
                subject: 'Utente creato', // Subject line
                text: 'Conferma creazione utente', // plain text body
                html: '<b>Conferma creazione utente</b>' // html body
            });
        
            console.log('Messaggio correttamente inviato: %s', info.messageId);
        } catch (error) {
            console.log(error);
        }
       
    }

    /**
     * Metodo pubblico di invio Email di test
     * @param user (utente)
     */
    public sendEmail(user) {

        if(process.env.DEBUG === "true") {
            this.testEmailSender(user);
        } else {
            this.prodEmailSender(user);
        }
    }

}