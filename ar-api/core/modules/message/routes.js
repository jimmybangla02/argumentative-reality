const MessageHandler = require("./handler/message-handler");

module.exports = [
    {
        method: 'POST',
        path: '/send-message/',
        config: {
            handler: MessageHandler.sendMessage,
            description: 'Send message',
            notes: 'Send message to client',
            tags: ['api']
        }

    }
];
