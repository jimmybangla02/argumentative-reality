const MessageHandler = require("./handler/message-handler");

module.exports = [
    {
        method: 'GET',
        path: '/send-message/',
        config: {
            handler: MessageHandler.sendMessage,
            description: 'Send message',
            notes: 'Send message to client',
            tags: ['api']
        }

    }
];
