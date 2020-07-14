const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    name: {type: String},
    text: {type: String}
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;