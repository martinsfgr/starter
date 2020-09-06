// REST (pegar o resto das propriedades)

const usuario = {
  nome: 'Mauricio',
  idade: 19,
  cidade: 'São Paulo'
}

const { nome, ...rest } = usuario;

console.log(nome, rest);

const arr = [1, 2, 3, 4];
const [ a, b, ...c] = arr;

console.log(a, b, c);

function soma(...params) {
  return params.reduce((accumulator, item) => accumulator + item);
}

console.log(soma(2, 3, 4, 5, 6));


// SPREAD (enquanto o REST pega o resto de uma desestruturação ou de uma passagem de parâmetros,
// o SPREAD tem o papel de propagar informações de um objeto ou lista para outra estrutura de dados).

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);

const usuario2 = { ...usuario, nome: 'Gabriel' };
console.log(usuario2);
