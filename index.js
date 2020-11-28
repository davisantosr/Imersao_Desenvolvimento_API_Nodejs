/* 
0 - Obter Usuário
1 - Obter telefone a partir do id
2 - Obter endereço a partir do id

*/

function obterUsuario() {
  //Quando der algum problema -> REJECT
  //Quando obtiver sucesso -> RESOLVE
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject(new Error('Big mistake'))
      return resolve({
        id: 1,
        nome: 'Aladdin',
        dataNascimento: new Date()
      })
    }, 1000);
  })
}

function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        telefone: '11111111',
        ddd: '11'
      }
      )
    }, 2000);
  })

}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'bobos',
      numero: 0
    }

    )
  }, 2000)
}

const usuarioPromise = obterUsuario()
// Para manipular o sucesso usamos a função .then
// Para manipular o erro usamos o .catch

usuarioPromise
  .then((usuario) => {
    return obterTelefone(usuario.id)

      .then((result) => {
        return {
          user: {
            nome: usuario.nome,
            id: usuario.id,
          },
          telefone: result
        }
      })
      .then((resultado) => {
        console.log('Resultado', resultado);
      }).catch((error) => {
        console.log('Error', error);
      })
  })

