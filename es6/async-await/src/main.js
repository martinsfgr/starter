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
  console.log(response);
});
