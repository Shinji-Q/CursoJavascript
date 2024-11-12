
const fotoDePerfilElement = document.querySelector('img#avatar');
const nomeElement = document.querySelector('h2#name');
const bioElement = document.querySelector('p#bio');
const reposElement = document.querySelector('span#repos');
const followersElement = document.querySelector('span#followers');
const followingElement = document.querySelector('span#following');
const profileLinkElement = document.querySelector('a#profile-link');


async function fetchAndShow(username) {

    let response = await fetch(`https://api.github.com/users/${username}`);
    let {message, status} = response;

    if(status !== 200) {
        alert('Perfil não encontrado :(');
        return;
    }

    let js = await response.json();

    let {
        avatar_url: foto,
        bio,
        name: nome,
        public_repos: nReposPublicos,
        followers: seguidores,
        following: seguindo,
        html_url: perfilUrl
    } = js;

    fotoDePerfilElement.src = foto;

    nomeElement.innerHTML = nome;
    bioElement.innerHTML = bio;
    reposElement.innerHTML = nReposPublicos;
    followersElement.innerHTML = seguidores;
    followingElement.innerHTML = seguindo;
    profileLinkElement.href = perfilUrl; 

}

let searchForm = document.querySelector('form#search-form')

searchForm.addEventListener('submit', function(ev) {
    ev.preventDefault();
    let nome = this.username.value;
    fetchAndShow(nome);
})
