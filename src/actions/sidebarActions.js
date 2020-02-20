import { FETCH_SIDEBAR_FAILURE, FETCH_SIDEBAR_REQUEST, FETCH_SIDEBAR_SUCCESS } from './actionTypes';

export const fetchSidebarRequest = (id) => ({
  type: FETCH_SIDEBAR_REQUEST,
  payload: { id },
});

export const fetchSidebarFailure = (error) => ({
  type: FETCH_SIDEBAR_FAILURE,
  payload: { error },
});

export const fetchSidebarSuccess = (movie) => ({
  type: FETCH_SIDEBAR_SUCCESS,
  payload: { movie },
});
