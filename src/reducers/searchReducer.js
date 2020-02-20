import {
  DO_SEARCH,
  FETCH_FILTER_SEARCH_FAILURE,
  FETCH_FILTER_SEARCH_REQUEST,
  FETCH_FILTER_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS, SET_FILTER_PARAMS, SET_PAGE,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  movies: [],
  page: 0,
  currentFetchType: '',
  filterParams: {},
  searchQuery: '',
};

export default function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_FILTER_SEARCH_REQUEST: {
      return {
        ...state, isLoading: true, error: null, currentFetchType: 'filter',
      };
    }
    case FETCH_FILTER_SEARCH_FAILURE: {
      const { error } = payload;
      return { ...state, isLoading: false, error };
    }
    case FETCH_FILTER_SEARCH_SUCCESS: {
      const { movies } = payload;
      return {
        ...state, isLoading: false, error: null, movies,
      };
    }
    case FETCH_SEARCH_REQUEST: {
      return {
        ...state, isLoading: true, error: null, currentFetchType: 'search',
      };
    }
    case FETCH_SEARCH_FAILURE: {
      const { error } = payload;
      return { ...state, isLoading: false, error };
    }
    case FETCH_SEARCH_SUCCESS: {
      const { movies } = payload;
      return {
        ...state, isLoading: false, error: null, movies,
      };
    }
    case SET_PAGE: {
      const { page } = payload;
      return { ...state, page };
    }
    case DO_SEARCH: {
      return { ...state };
    }
    case SET_FILTER_PARAMS: {
      const { params } = payload;
      return { ...state, filterParams: params };
    }
    default:
      return { ...state };
  }
}
