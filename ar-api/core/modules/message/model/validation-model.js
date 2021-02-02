const Joi = require('joi');

module.exports = Joi.object({
        phone: Joi.number().required().description('phone number'),
        message: Joi.string().required().description('send connecting sms')
        .required()
        .description('send message')
});
