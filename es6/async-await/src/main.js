const nome = 'Mauricio';

const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    nome === 'Mauricio' ? 
      resolve({
        name: nome,
        message: 'Dale!'
      }) :
      reject({
        name: 'Tá errado',
        message: ':('
      })
  }, 2000)
})

minhaPromise().then(response => {
  console.log('Sem async/await', response);
});

async function executaPromise() {
  const response = await minhaPromise();
  console.log('Utilizando async/await', response);
}

executaPromise();
