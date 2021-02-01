const twilio = require('twilio');
const config = require("../../../config/config");


class MessageHandler {
    static sendMessage(request, reply) {
        const client = new twilio(config.get('TWILIO_ACCOUNT_SID'), config.get('TWILIO_AUTH_TOKEN'));
        client.message.create({
            to: '+12135688885',
            from: config.get('TWILIO_NUMBER'),
            body: 'test'
        })
            .then(message => console.log(message.sid))
            .catch(error => console.log(error.message))
        reply('ddd')
    }
}

module.exports = MessageHandler;
