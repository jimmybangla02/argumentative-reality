const MessageHandler = require("./handler/message-handler");
const ValidPhoneNumber = require('./model/validation-model');

module.exports = [
    {
        method: 'POST',
        path: '/send-message/',
        config: {
            handler: MessageHandler.sendMessage,
            validate: {
                payload: ValidPhoneNumber
            },
            description: 'Send message',
            notes: 'Send message to client',
            tags: ['api']
        },


    }
];
