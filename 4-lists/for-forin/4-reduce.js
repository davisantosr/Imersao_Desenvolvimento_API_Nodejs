const { obterPessoas } = require('./service')

async function main() {
  try {
    const { results } = await obterPessoas(`a`)
    
    const altura = results.map(item => parseInt(item.height))
    console.log(altura)

    const total = altura.reduce((anterior, proximo) => {
      return anterior + proximo
    })

    console.log('total: ', total)

  
  } catch (error) {
    console.error('Ocorreu o erro: ', error)
  }
}

main()