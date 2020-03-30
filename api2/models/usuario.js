const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;