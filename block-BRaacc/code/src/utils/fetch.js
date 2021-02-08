async function fetchFn (username="nnnkit",path = "") {
  const BASE_URL = `http://api.github.com/users/`;
  const gitHubResponse = await fetch(`${BASE_URL}${username}${path}`);
  const JSON_data = await gitHubResponse.json();
  return JSON_data
}

export default fetchFn;