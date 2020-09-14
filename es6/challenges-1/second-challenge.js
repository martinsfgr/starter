const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Google' }
];

// Map:
console.log(usuarios.map(usuario => usuario.idade));

// Filter:
console.log(usuarios.filter(usuario => 
  usuario.empresa === 'Rocketseat' && usuario.idade >= 18));

// Find:
console.log(usuarios.find(usuario => usuario.empresa === 'Google'));

// Unindo Operações:
console.log(usuarios.map(({ idade, ...rest }) => {
  return {...rest, idade: idade * 2}
}).filter(usuario => usuario.idade <= 50));
