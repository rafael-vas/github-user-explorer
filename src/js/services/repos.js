import { baseUrl } from "../variables.js";

async function serviceRepositories(userName) {
  const res = await fetch(`${baseUrl}/${userName}/repos`);
  return await res.json();
}

export { serviceRepositories };