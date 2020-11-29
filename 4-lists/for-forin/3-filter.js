const { obterPessoas } = require('./service')

async function main() {
  try {
    const { results } = await obterPessoas(`a`)

    const familiaLars = results.filter(item => { 
      //por padrão retorna uma lista com os valores
      //que forem positivos

      const result = item.name.toLowerCase().indexOf(`lars`) !== -1
      //Não encontrou = -1
      //Encontrou = PosicaoNoArray
      return result

    })
    const names = familiaLars.map(pessoa => pessoa.name)

    console.log(names);
    
  } catch (error) {
    console.error('Ocorreu o erro: ', error)
  }
}

main()