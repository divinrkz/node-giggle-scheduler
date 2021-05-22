const {Schema, model} = require('mongoose');

const schema = new Schema({
    type: {type: String, enum: ['SMS', 'MAIL']},
    data: {type: Object},
    executeOn: {type: Date}
});

schema.index({executeOn: -1});

exports.Scheduler = model('scheduler', schema);