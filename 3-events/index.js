const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()

const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function(click) {
  console.log('Um usuário clicou', click)
})

meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'ok')
