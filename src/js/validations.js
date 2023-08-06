import { screen } from "./objects/screen.js";

function isEmpty(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o nome do usuário do GitHub");
    return true;
  }
}

function notFound(objectUser) {
  if (!objectUser.found) {
    screen.renderNotFound();
    return true;
  }
}

export { isEmpty, notFound };