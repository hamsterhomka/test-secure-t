import { FETCH_FILTER_GENRES_FAILURE, FETCH_FILTER_GENRES_REQUEST, FETCH_FILTER_GENRES_SUCCESS } from './actionTypes';

export const fetchFilterGenresRequest = () => ({
  type: FETCH_FILTER_GENRES_REQUEST,
});

export const fetchFilterGenresFailure = (error) => ({
  type: FETCH_FILTER_GENRES_FAILURE,
  payload: { error },
});

export const fetchFilterGenresSuccess = (genres) => ({
  type: FETCH_FILTER_GENRES_SUCCESS,
  payload: { genres },
});
