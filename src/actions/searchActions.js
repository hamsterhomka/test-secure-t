import {
  DO_SEARCH,
  FETCH_FILTER_SEARCH_FAILURE,
  FETCH_FILTER_SEARCH_REQUEST,
  FETCH_FILTER_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS, SET_FILTER_PARAMS, SET_PAGE, SET_SEARCH_QUERY,
} from './actionTypes';

export const fetchFilterSearchRequest = () => ({
  type: FETCH_FILTER_SEARCH_REQUEST,
});

export const fetchFilterSearchFailure = (error) => ({
  type: FETCH_FILTER_SEARCH_FAILURE,
  payload: { error },
});

export const fetchFilterSearchSuccess = (movies, totalPages) => ({
  type: FETCH_FILTER_SEARCH_SUCCESS,
  payload: { movies, totalPages },
});

export const fetchSearchRequest = (query, history) => ({
  type: FETCH_SEARCH_REQUEST,
  payload: { query },
  history,
});

export const fetchSearchFailure = (error) => ({
  type: FETCH_SEARCH_FAILURE,
  payload: { error },
});

export const fetchSearchSuccess = (movies, totalPages) => ({
  type: FETCH_SEARCH_SUCCESS,
  payload: { movies, totalPages },
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

export const doSearchFetch = (history) => ({
  type: DO_SEARCH,
  history,
});

export const setFilterParams = (params) => ({
  type: SET_FILTER_PARAMS,
  payload: { params },
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: { query },
});
