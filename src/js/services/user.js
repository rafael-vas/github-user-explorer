import { baseUrl } from "../variables.js";

async function serviceUser(userName) {
  const res = await fetch(`${baseUrl}/${userName}`);
  const data = await res.json();
  return data;
}

export { serviceUser };
