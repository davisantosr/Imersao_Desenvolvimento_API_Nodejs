const service = require('./service')

async function main() {
  try {
    const results = await service.obterPessoas(`a`)
    // const names = []
    // results.results.forEach( item => {
    //   names.push(item.name)      
    // });
    // const names = results.results.map(pessoa => {
    //   return pessoa.name
    // })
    const names = results.results.map(pessoa => pessoa.name)
    console.log(names);
  } catch (error) {
    console.error('Ocorreu um erro: ', error)
    
  }
}

main()