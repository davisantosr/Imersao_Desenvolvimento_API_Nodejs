const axios = require('axios')

const URL = `https://swapi.dev/api/people`

async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`
  const response = await axios.get(url)
  return response.data
}

// obterPessoas()
//   .then((resultado) => {
//     console.log('resultado: ', resultado);
//   })
//   .catch(function (error) {
//     console.log('Ocorreu um erro', error);
//   })

module.exports = {
  obterPessoas
}