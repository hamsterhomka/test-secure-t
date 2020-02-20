import { createApiUrl } from '../constants/constants';

export const fetchGenres = async () => {
  const response = await fetch(`${createApiUrl('/genre/movie/list')}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const responseJson = await response.json();
  return responseJson;
};

export const fetchFilterMovies = async ({
  genre, yearFrom, yearTo, ratingFrom, ratingTo,
}) => {
  const urlParams = {
    with_genres: genre || '',
    'primary_release_date.gte': yearFrom ? `${yearFrom}-01-01` : '',
    'primary_release_date.lte': yearTo ? `${yearTo}-12-31` : '',
    'vote_average.gte': ratingFrom || '',
    'vote_average.lte': ratingTo || '',
    sort_by: 'primary_release_date.desc',
  };
  const response = await fetch(`${createApiUrl('/discover/movie', urlParams)}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const responseJson = await response.json();

  return responseJson;
};

export const fetchSidebarMovie = async (movieId) => {
  const response = await fetch(`${createApiUrl(`/movie/${movieId}`)}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const responseJson = await response.json();

  return responseJson;
};

export const fetchSearch = async (query) => {
  console.log(query);
  const response = await fetch(`${createApiUrl('/search/movie', { query })}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const responseJson = await response.json();

  return responseJson;
};
