const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: [true, "Nome é obrigatório"]
    },
    preco: {
        type: Number,
        required: true
    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('Produto', schema)