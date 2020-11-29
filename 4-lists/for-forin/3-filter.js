const { obterPessoas } = require('./service')


Array.prototype.meuFilter = function(callback) {
  for(index in this) {
    const item = this[index]
    const result = callback(item, index, this)
 
    if(!result) continue;
    lista.push(item)
  }
  return lista;
}

async function main() {
  try {
    const { results } = await obterPessoas(`a`)

    // const familiaLars = results.filter(item => { 
    //   //por padrão retorna uma lista com os valores
    //   //que forem positivos

    //   const result = item.name.toLowerCase().indexOf(`lars`) !== -1
    //   //Não encontrou = -1
    //   //Encontrou = PosicaoNoArray
    //   return result

    // })

    const familiaLars = results.meuFilter((item, index, lista) => {
      console.log(`index: ${index}`, lista.length);
      
      return item.name.toLowerCase().indexOf('lars') !== -1})

    const names = familiaLars.map(pessoa => pessoa.name)

    console.log(names);
    
  } catch (error) {
    console.error('Ocorreu o erro: ', error)
  }
}

main()