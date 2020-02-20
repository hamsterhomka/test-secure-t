import { FETCH_SIDEBAR_FAILURE, FETCH_SIDEBAR_REQUEST, FETCH_SIDEBAR_SUCCESS } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  id: null,
  poster_path: '',
  overview: '',
  tagline: '',
  vote_average: '',
  release_date: '',
  genres: [],
  runtime: 0,
};

export function sidebarReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SIDEBAR_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case FETCH_SIDEBAR_FAILURE: {
      const { error } = payload;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    case FETCH_SIDEBAR_SUCCESS: {
      const { movie } = payload;
      return {
        ...state,
        isLoading: false,
        error: null,
        ...movie,
      };
    }
    default:
      return { ...state };
  }
}
