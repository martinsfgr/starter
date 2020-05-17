let inputElement = document.querySelector("input");
let buttonElement = document.querySelector("button");
let userInfos = document.querySelector(".user__infos");

var getUser = function() {
  userInfos.innerHTML = '';

  let user = inputElement.value;

  let loadingElement = document.createElement('p');
  loadingElement.innerHTML = 'Carregando...';
  loadingElement.classList.add('loading-request');
  userInfos.appendChild(loadingElement);

  axios.get(`https://api.github.com/users/${user}`)
    .then(function(response) {
      userInfos.innerHTML = '';

      let userAvatarUrl = response.data.avatar_url;
      let userAvatarElement = document.createElement('img');
      userAvatarElement.setAttribute('src', `${userAvatarUrl}`);
      userAvatarElement.classList.add('user__avatar');

      let userName = response.data.name;
      let userNameElement = document.createElement('p');
      userNameElement.innerHTML = `Nome: ${userName}`;
      userNameElement.classList.add('user__name');

      let userBio = response.data.bio;
      let userBioElement = document.createElement('p');
      userBioElement.innerHTML = `Bio: ${userBio}`;
      userBioElement.classList.add('user__bio');

      let userLocation = response.data.location;
      let userLocationElement = document.createElement('p');
      userLocationElement.innerHTML = `Localização: ${userLocation}`;
      userLocationElement.classList.add('user__location');

      userInfos.appendChild(userAvatarElement);
      userInfos.appendChild(userNameElement);
      userInfos.appendChild(userBioElement);
      userInfos.appendChild(userLocationElement);
    })
    .catch(function(error) {
      let body = document.querySelector('body');
      body.innerHTML = '';

      let errorElement = document.createElement('img');
      errorElement.setAttribute('src', `https://http.cat/${error.response.status}`);
      
      body.appendChild(errorElement);
    })
}

buttonElement.onclick = getUser;
