const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    nome: { type: String, required: true, max: 100 },
    telefone: { type: String, required: true, max: 15 },
    email: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model('User', UserSchema);