/* 
0 - Obter Usuário
1 - Obter telefone a partir do id
2 - Obter endereço a partir do id

*/

function obterUsuário(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1, 
      nome: 'Aladin', 
      dataNascimento: new Date()
    }

  )}, 1000);

}

function obterTelefone(idUsuário) {
  setTimeout(() => {
    return {
      telefone: '11111111', 
      ddd: '11'
    }

  }, 2000);

}

function obterEndereco(idUsuário) {

}

// Callback func
function resolverUsuario(erro, usuario){
  console.log('usuário', usuario);

}

obterUsuário(resolverUsuario)

