import { createEventItens } from "../elements/eventItens.js";

const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
            <div class="data">
                <h1 class="name">${user.name ?? "Não possui nome cadastrado"}</h1>
                <h2 class="username">${user.userName ?? "Não possui nome cadastrado"}</h2>
                <p class="bio">
                  <i class="fa-solid fa-address-card"></i>
                  ${user.bio ?? "Não possui bio cadastrada"}
                </p>
                <p class="location">
                  <i class="fa-solid fa-location-dot"></i>
                  ${
                    user.location ?? "Não possui localização cadastrada"
                  }
                </p>
                <p class="follow">
                  <i class="icon fa-solid fa-user-group"></i>
                  ${user.followers ?? "Não é seguido por ninguém"}
                  <span>seguidores ·</span>
                  ${user.following ?? "Não segue ninguém"}
                  <span>seguindo</span>
                </p>
            </div>
        </div>
    `;

    this.renderRepositories(user);
    this.renderEvents(user)
  },

  renderRepositories(user) {
    let repositoryItens = "";

    user.repositories.forEach((repo) => {
      repositoryItens += `
                <li>
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                  <div class="info">
                    <p class="forks">
                      <i class="fa-solid fa-code-fork"></i>
                      ${repo.forks_count}
                    </p>
                    <p class="stargazes">
                      <i class="fa-solid fa-star"></i>
                      ${repo.stargazers_count}
                    </p>
                    <p class="watchers">
                      <i class="fa-solid fa-eye"></i>
                      ${repo.watchers_count}
                    </p>
                    <p class="language">
                      <i class="fa-solid fa-code"></i>
                      ${repo.language ?? "Desconhecida"}
                    </p>
                  </div>
                </li>
            `;
    });

    this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositórios (${user.repositories.length})</h2>
                <ul>
                    ${repositoryItens}
                </ul>
            </div>
        `;
  },

  renderEvents(user) {
    let eventItens = "";

    user.events.forEach((event) => {
       eventItens = createEventItens(eventItens, event)
    });

    this.userProfile.innerHTML += `
            <div class="event-section">
                <h2>Eventos (${user.events.length})</h2>
                <ul class="event-list">
                    ${eventItens}
                </ul>
            </div>
        `;
  },

  renderNotFound() {
    this.userProfile.innerHTML = `<h3>Usuário não encontrado!</h3>`;
  },
};

export { screen };
