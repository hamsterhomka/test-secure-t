import {
  DO_SEARCH,
  FETCH_FILTER_SEARCH_FAILURE,
  FETCH_FILTER_SEARCH_REQUEST,
  FETCH_FILTER_SEARCH_SUCCESS,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS, SET_FILTER_PARAMS, SET_PAGE, SET_SEARCH_QUERY,
} from './actionTypes';

export const fetchFilterSearchRequest = (params, history) => ({
  type: FETCH_FILTER_SEARCH_REQUEST,
  payload: { params },
  history,
});

export const fetchFilterSearchFailure = (error) => ({
  type: FETCH_FILTER_SEARCH_FAILURE,
  payload: { error },
});

export const fetchFilterSearchSuccess = (movies) => ({
  type: FETCH_FILTER_SEARCH_SUCCESS,
  payload: { movies },
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

export const fetchSearchSuccess = (movies) => ({
  type: FETCH_SEARCH_SUCCESS,
  payload: { movies },
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

export const doSearchFetch = () => ({
  type: DO_SEARCH,
});

export const setFilterParams = (params) => ({
  type: SET_FILTER_PARAMS,
  payload: { params },
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: { query },
});
