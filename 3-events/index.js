const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()

const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function (click) {
  console.log('Um usuário clicou', click)
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')

// let count = 0;
// setInterval(() => {
//   meuEmissor.emit(nomeEvento, 'ok' + (count++))

// }, 1000);


// Verificar que na Promise o evento executa apenas uma vez
const stdin = process.openStdin()
function main() {
  return new Promise((resolve, reject) => {
    stdin.addListener('data', function (value) {
      // console.log(`Você digitou ${value.toString().trim()}`);

      return resolve(value)
    })
  })
}
main().then(function(resultado) {
  console.log('resultado: ', resultado.toString())
})