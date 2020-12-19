const Commander = require('commander')
const database = require('./database')
const Database = require('./database')
const Heroi = require('./heroi')

async function main() {
  
  Commander
    .help("Teste")
    .version('v1')
    .option('-n, --nome [value]', "Nome do Heroi")
    .option('-p, --poder [value]', "Poder do herói")
    .option('-i, --id [value]', "Id do herói")

    .option('-c, --cadastrar', "Cadastrar um heroi")
    .option('-l, --listar', "Listar um heroi")
    .option('-r, --remover [value]', "Remove um heroi pelo id")
    .option('-a, --atualizar [value]', "Atualiza um heroi")
    
    .parse(process.argv)

  const heroi = new Heroi(Commander)
  try {
    if(Commander.cadastrar){
      delete heroi.id
      const resultado = await Database.cadastrar(heroi)
      if(!resultado) {
        console.error('Heroi não foi cadastrado')
        return
      }

      console.log('Heroi cadastrado com sucesso')
    }

    if(Commander.listar) {
      const resultado = await Database.listar()
      console.log(resultado)
      return
    }

    if(Commander.remover) {
      const resultado = await Database.remover(heroi.id)
      if(!resultado){
        console.error('Não foi possível remover o heroi')
        return
      }

      console.log('Heroi removido com sucesso')
    }

    if(Commander.atualizar) {
      const idParaAtualizar = parseInt(Commander.atualizar);
      // Remover todas as chaves que estiverem com undefined | null
      const dado = JSON.stringify(heroi)
      const heroiAtualizar = JSON.parse(dado)
      const resultado = Database.atualizar(idParaAtualizar, heroiAtualizar)
      if(!resultado) {
        console.error('Não foi possível atualizar o heroi')
        return
      }
      console.log('Heroi atualizado com sucesso')


    }
    
  } catch (error) {
    console.log('Deu erro', error)
    
  }
    
}

main()