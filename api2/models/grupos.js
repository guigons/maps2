const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grupoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    usuarios: [{
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    }]
});

const Grupo = mongoose.model('grupos',grupoSchema);

module.exports = Grupo;