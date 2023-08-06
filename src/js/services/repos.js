import { baseUrl } from "../variables.js";

async function serviceRepositories(userName) {
  const res = await fetch(`${baseUrl}/${userName}/repos`);
  const data = await res.json();
  return data;
}

export { serviceRepositories };