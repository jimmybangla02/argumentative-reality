require ('dotenv').config();
const Twilio = require('twilio');


class MessageHandler {
    static sendMessage(request, reply) {

        const accountId = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;



        const client = new Twilio(accountId, authToken)

        console.log(accountId, authToken, client, 'client');

        const phoneNumber = `+1${request.payload.phone}`;
        const msgBody = request.payload.message;

        console.log(phoneNumber, msgBody, 'dd');

        client.messages.create({
            to: phoneNumber,
            from: process.env.TWILIO_NUMBER,
            body: msgBody
        }).then(message => {
            console.log(message.sid)
            reply(message.sid)
        }).catch(error => {
            console.log('error', error.message);
            reply(error.message)
        })

        // reply(message.sid)
    }
}

module.exports = MessageHandler;
