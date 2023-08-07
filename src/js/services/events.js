import { baseUrl } from "../variables.js";
import { eventsQuantity } from "../variables.js";

async function serviceEvents(userName) {
    const res = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`)
    return await res.json()
}

export { serviceEvents }