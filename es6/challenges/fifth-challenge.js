const arrNumbers = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
console.log('Variável X', x);
console.log('Variável Y', y);

const soma = (...numbers) => {
  return numbers.reduce((accumulator, number) => accumulator + number);
};

console.log('Soma:', soma(1, 2, 3, 4, 5));

const userMock = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};
console.log(userMock);

const user2 = { ...userMock, nome: 'Gabriel' }
console.log(user2);

const user3 = { ...userMock, endereco: { cidade: 'Lontras' }};
console.log(user3);
