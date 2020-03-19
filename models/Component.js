const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const componentSchema = new Schema({
    name: {type: String},
    codeSnippet: {type: String},
    interface: [String],
    version: {type: String},
});

const Component = mongoose.model('Component', componentSchema);

module.exports = Component;