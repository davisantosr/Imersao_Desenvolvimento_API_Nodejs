const { deepEqual, ok } = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}
describe('Suite de manipulação de heróis', () => {

  it('deve pesquisar um herói usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expected.id)

    deepEqual(resultado, expected) 
    // ok: o primeiro parametro somente verifica 
    // true ou false para saber se há valor diferente de null
  })
  
  it('deve cadastrar um héroi, usando arquivos', async () => {

    const expected = DEFAULT_ITEM_CADASTRAR
    //
    deepEqual(expected, expected)

  })
})