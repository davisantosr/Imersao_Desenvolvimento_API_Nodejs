const assert = require('assert')
const { obterPessoas } = require('../../4-lists/for-forin/service')

describe('Star Wars Tests', () => {
  it('buscar o r2d2 com o formato correto', async () => {
    const expected = [{nome: 'R2-D2', peso: '96'}]
    const nomeBase = `r2-d2`
    const resultado = await obterPessoas(nomeBase)
    assert.deepStrictEqual(resultado, expected)
  })
}) 