const repository = require("../repositories/produto-repository")

exports.getAll = async(req, res, next) => {
    const data = await repository.getAll();
    res.status(200).send(data)
}

exports.post = async(req, res, next) => {
    await repository.create(req.body)
    res.status(200).send("Criado com sucesso!")
}

exports.update = async(req, res, next) => {
    const id = req.params.id;
    await repository.update(id, res.body)
    res.status(200).send("Atualizado com sucesso!")
}

exports.delete = async(req, res, next) => {
    const id = req.params.id
    await repository.delete(id)
    res.status(200).send("Removido com sucesso!")
}

exports.getById = async(req, res, next) => { 
    const id = req.params.id
    const data = await repository.getById(id)

    if (data == null)
        res.status(404).send()
    
    res.status(200).send(data)
}
