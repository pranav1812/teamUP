const db = require('./connection');
const Joi = require('joi');

const messages = db.get('messages');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(),
    imageUrl: Joi.string().uri({
        scheme: [
            /http?/
        ]
    })
});


function getAll(){
    return messages.find();
}


function create(message){
    const result = Joi.validate(message, schema);
    if (result.error == null){
        message.created = new Date();
        return messages.insert(message);
    }
    else{
        return Promise.reject(result.error);
    }
}

module.exports = {
    getAll,
    create
};
