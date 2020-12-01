const { get } = require('axios');
const { obterPessoas } = require('../../4-lists/for-forin/service');

const URL = `https://swapi.dev/api/people`


async function obterPessoas(nome) {
  const url = await get(`${URL}/?search=${nome}&format=json`)
  const result = await get(url)
  return result.data
}

module.exports = {
  obterPessoas
}