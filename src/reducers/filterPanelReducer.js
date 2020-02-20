import { FETCH_FILTER_GENRES_FAILURE, FETCH_FILTER_GENRES_REQUEST, FETCH_FILTER_GENRES_SUCCESS } from '../actions/actionTypes';

const initialState = {
  genres: {
    isLoading: false,
    error: null,
    list: [],
  },
};

export default function filterPanelReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_FILTER_GENRES_REQUEST: {
      return {
        ...state,
        genres: {
          ...state.genres,
          isLoading: true,
          error: null,
        },
      };
    }
    case FETCH_FILTER_GENRES_FAILURE: {
      const { error } = payload;
      return {
        ...state,
        genres: {
          ...state.genres,
          isLoading: false,
          error,
        },
      };
    }
    case FETCH_FILTER_GENRES_SUCCESS: {
      const { genres } = payload;
      return {
        ...state,
        genres: {
          ...state.genres,
          isLoading: false,
          error: null,
          list: genres,
        },
      };
    }
    default:
      return { ...state };
  }
}
