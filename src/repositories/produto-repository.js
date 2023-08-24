const mongoose = require('mongoose')
const Produto = mongoose.model('Produto')

exports.getAll = async()=>{
    const result = await Produto.find({ativo:true})
    return result
}

exports.create = async(data) => {
    let produto = Produto(data)
    await produto.save()
}

exports.delete = async(id) => {
    await Produto.findByIdAndUpdate(id, {
        $set:
        {
            ativo: false
        }
    })
}

exports.getById = async(id) => {
    const result = await Produto.findOne(
        {_id: id},
        "_id nome preco ativo"
    )
    return result
}

exports.update = async(id, data) => {
    await Produto.findByIdAndUpdate(id,
        {
            $set : {
                nome: data.nome,
                preco: data.preco,
                ativo: data.ativo
            }
        }
    )
}