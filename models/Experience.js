const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    name: {type: String},
    status: {type: String, enum: ['active', 'paused', 'scheduled', 'ended', 'draft']},
    dateCreated: {type: String},
    dateModified: {type: String},
    components: [{type: mongoose.Schema.Types.ObjectId, ref: 'Component'}],
    codeSnippets: [{type: mongoose.Schema.Types.ObjectId, ref: 'CodeSnippet'}],
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    editors: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    market: {type: String},
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;