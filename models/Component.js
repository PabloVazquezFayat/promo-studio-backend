const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const componentSchema = new Schema({
    name: {type: String},
    sourceCode: {type: String},
    interfaceCode: {type: String},
    interfaceVariables: [{type: String}],
    dateCreated: {type: String},
    dateModified: {type: String},
});

const Component = mongoose.model('Component', componentSchema);

module.exports = Component;