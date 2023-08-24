const express = require('express')
const router = new express.Router() //criamos nova instancia do router 1:20:00

router.get('/', (req, res, next) => { //primeira rota vem aqui (request, response, next)
    res.status(200).send({ //request mandando 200 com info de exemplo (200 OK, requisicao com sucesso)
        nome: 'Marcio Yukio',
        info: 'Hello World!!!',
        versao: 1.0
    })

})

router.post('/', (req, res, next) => { //caminho '/' nao da conflit pq um eh get e um eh postt
    console.log(req.body) //soh para jogar no console para vermos que esta chegando na pagina

    const mensagem = 'Recebido com sucesso!!!'; //mensagem opcional para mandar

    res.status(201).send(mensagem) //response status (201 created)

})

router.put('/', (req, res, next) => {
    const retorno = {
        message : "Atualizado!",
        body: req.body //request body, quem esta pedindo o request, o atributo body eh mandado
    }

    res.status(200).send(retorno); //response
});

module.exports = router //exportamos como um module