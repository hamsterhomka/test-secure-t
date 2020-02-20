export const createApiUrl = (apiPath, params) => (
  `https://api.themoviedb.org/3${apiPath}?`
  + `api_key=8c2f6b916f4afa6bd6c522ef5e225b4d&language=en-US&${new URLSearchParams(params)}`
);
