/* 
0 - Obter Usuário
1 - Obter telefone a partir do id
2 - Obter endereço a partir do id

*/

function obterUsuário(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1, 
      nome: 'Aladdin', 
      dataNascimento: new Date()
    }

  )}, 1000);

}

function obterTelefone(idUsuário, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '11111111', 
      ddd: '11'
    }

  )}, 2000);

}

function obterEndereco(idUsuário, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'bobos',
      numero: 0
    }

  )}, 2000)

}

// Callback func de forma externa

// function resolverUsuario(erro, usuario){
//   console.log('usuário', usuario);

// }

obterUsuário(function resolverUsuario(error, usuario){
  if(error) {
    console.error('Falha em USUÁRIO', errror);
    return
  }
  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone){
    if(erro1){
      console.error('Falha em TELEFONE', erro1);
      return
    }

    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco){
      if(erro1){
        console.error('Falha em Endereço', erro2);
        return
      }
      
      console.log(`
      Nome: ${usuario.nome},
      Endereço: ${endereco.rua}, ${endereco.numero},
      Telefone: ${telefone.ddd} ${telefone.telefone}`);
    })
  })
})

