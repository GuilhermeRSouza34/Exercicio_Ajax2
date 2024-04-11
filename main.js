document.addEventListener("DOMContentLoaded", function(e) {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://github.com/GuilhermeRSouza34')
        .then(function (res) {
            return res.json();
        })
});