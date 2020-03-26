const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeSnippetSchema = new Schema({
    snippet: {type: String}
});

const CodeSnippet = mongoose.model('CodeSnippet', codeSnippetSchema);

module.exports = CodeSnippet;