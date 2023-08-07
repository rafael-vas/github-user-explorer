import { baseUrl } from "../variables.js";

async function serviceUser(userName) {
  const res = await fetch(`${baseUrl}/${userName}`);
  return await res.json();
}

export { serviceUser };
