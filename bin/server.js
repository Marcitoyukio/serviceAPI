//server.js vai startar nossa aplicação
const http = require('http') //importe pacotes do http?
const app = require('../src/app') //require da aplicação, dois pontos para sair do folder bin
const port = buscarPorta(process.env.PORT || '3000'); //porta

const server = http.createServer(app); // criar instancia do servidor e salvar como objeto server
server.listen(port) //fazemos o servidor listen a porta
server.on('error', onError) //fazer tratamento de erro
server.on('listening', onListening)

console.log(`Api executada na porta ${port}`)

// console.log(server) - apenas para mostrar os valores exatos 

function onError(error) {
    if (error.syscall !== 'listen') { // !== compara o TIPO e o VALOR das variaveis, TEM que ser diferente (!)
        // listen quer dizer que esta OK! por isso tem que ser diferente
        throw error; //sobe alerta de erro (da para utilizar com software de monitoramento)
    }
    //52:01 aula 31 IF ternário (salva cinco linhas)
    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port; //falso, concatena "Port" com a porta
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' required elevated priviledges'); //mostra na tela o erro
            process.exit(1)
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break;
        default:
            throw error;
    }
}

//1:04:00 aula 31
function onListening() {
    var addr = server.address();
    var bind = //pega a linha de baixo
        typeof addr === 'string' ? `pipe ${addr}` : `${addr.family}:${addr.port}`; //crase permite contatenacao de variavel
    //    debug('Listening on' + bind)
}

//alt + shift + F para arrumar
function buscarPorta(val) { //funcao de validacao de porta

    const port = parseInt(val, 10);

    if (isNaN(port)) //deu certo
        return val;


    if (port > 0) //deu errado, sobe a porta
        return port;

    return false; //nao sobe o servidor
}