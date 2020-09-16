const arr = [1, 2, 3, 4, 5];

console.log(arr.map(item => item + 10));

const usuario = { nome: 'Mauricio', idade: '19'};

const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

const nomeUsuario = 'Mauricio';
const idadeUsuario = '19'

const mostraUsuario = (nome, idade) => {
  return { nome, idade };
};
console.log(mostraUsuario(nomeUsuario, idadeUsuario));

const promise = () => new Promise((resolve, reject) => resolve());
