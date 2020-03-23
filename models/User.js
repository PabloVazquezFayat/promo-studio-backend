const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    permissions: {
        create: {type: Boolean},
        read:   {type: Boolean},
        update: {type: Boolean},
        delete: {type: Boolean},
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;