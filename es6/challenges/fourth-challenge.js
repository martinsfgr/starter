const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

const nome = empresa.nome;
const cidade = empresa.endereco.cidade;
const estado = empresa.endereco.estado;

console.log(nome, cidade, estado);

function mostraInfo(usuario) { 
  const { nome , idade } = usuario;
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
