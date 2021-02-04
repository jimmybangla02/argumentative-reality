require ('dotenv').config();
const Twilio = require('twilio');


class MessageHandler {
    static sendMessage(request, reply) {

        const accountId = "AC5359c04d1f014a8f340223ac74f68c81"; //config.get('TWILIO_ACCOUNT_SID');
        const authToken = "5604c81dcd7123c87f1d5a3ee806394d"; // config.get('TWILIO_AUTH_TOKEN');
        const client = new Twilio(accountId, authToken)
        const phoneNumber = `+1${request.payload.phone}`;
        const msgBody = request.payload.message;

        client.messages.create({
            messagingServiceSid: "MGd15761daa54834ae19b50e56423d13b1", //config.get('TWILIO_MESSAGE_SID_ACCOUNT'),
            to: phoneNumber,
            body: msgBody
        }).then(message => {
            reply(message)
        }).catch(error => {
            reply(error.message)
        }).done();
    }
}

module.exports = MessageHandler;
