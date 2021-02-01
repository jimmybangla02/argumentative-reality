const routes = require('./routes');

module.exports.register = (server, options, next) => {
    server.route(routes);
    next();
};

module.exports.register.attributes = {
    name: "send message",
    version: "1.0.0"
};
