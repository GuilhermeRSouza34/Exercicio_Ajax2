document.addEventListener("DOMContentLoaded", function(e) {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/GuilhermeRSouza34')
        .then(function (res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;

            // Agora vamos obter os dados dos seguidores e pessoas que você segue
            fetch(json.followers_url)
                .then(res => res.json())
                .then(followers => {
                    followersElement.innerText = followers.length;
                });

            fetch(json.following_url.replace('{/other_user}', ''))
                .then(res => res.json())
                .then(following => {
                    followingElement.innerText = following.length;
                });
        });
});