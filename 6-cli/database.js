const { readFile } = require('fs')

const { promisify } = require('util')

const readFileAsync = promisify(readFile)

// Outra maneira de ler arquivo JSON:
// const dadosJson = require('./herois.json')

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json'
  }

  obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')

  }  

  escreverArquivo() {

  }
  listar() {
    return null
  }
}


module.exports = new Database()