import { serviceUser } from "./services/user.js";
import { serviceRepositories } from "./services/repos.js";
import { serviceEvents } from "./services/events.js";

import { objectUser as user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

import { isEmpty } from "./validations.js";
import { notFound } from "./validations.js";

const $searchBtn = document.querySelector("#btn-search");
const $searchInput = document.querySelector("#input-search");

async function getUserData(userName) {
    userName = $searchInput.value

    if (isEmpty(userName)) return;

    const userData = await serviceUser(userName)
    const reposData = await serviceRepositories(userName)
    const eventsData = await serviceEvents(userName)



    user.setInfo(userData)

    if (notFound(user)) return;

    user.setRepositories(reposData)
    user.setEvents(eventsData)

    screen.renderUser(user)
}

$searchBtn.addEventListener("click", getUserData)
$searchInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        getUserData()
    }
})