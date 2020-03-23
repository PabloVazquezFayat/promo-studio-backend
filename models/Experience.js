const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    name: {type: String},
    status: {type: String, enum: ['active', 'paused', 'schedueled', 'ended', 'draft']},
    dateCreated: {type: String},
    dateModified: {type: String},
    components: [{type: Schema.Types.ObjectId, ref: 'Component'}],
    market: {type: String},
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;