import {
  DO_SEARCH,
  FETCH_FILTER_SEARCH_FAILURE,
  FETCH_FILTER_SEARCH_REQUEST,
  FETCH_FILTER_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS, SET_FILTER_PARAMS, SET_PAGE, SET_SEARCH_QUERY,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  movies: [],
  page: 1,
  currentFetchType: '',
  filterParams: {},
  searchQuery: '',
  totalPages: 0,
};

export default function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_FILTER_SEARCH_REQUEST: {
      return {
        ...state, isLoading: true, error: null,
      };
    }
    case FETCH_FILTER_SEARCH_FAILURE: {
      const { error } = payload;
      return { ...state, isLoading: false, error };
    }
    case FETCH_FILTER_SEARCH_SUCCESS: {
      const { movies, totalPages } = payload;
      return {
        ...state,
        isLoading: false,
        error: null,
        movies: state.page > 1 ? [...state.movies, ...movies] : movies,
        totalPages,
      };
    }
    case FETCH_SEARCH_REQUEST: {
      return {
        ...state, isLoading: true, error: null,
      };
    }
    case FETCH_SEARCH_FAILURE: {
      const { error } = payload;
      return { ...state, isLoading: false, error };
    }
    case FETCH_SEARCH_SUCCESS: {
      const { movies, totalPages } = payload;
      return {
        ...state,
        isLoading: false,
        error: null,
        movies: state.page > 1 ? [...state.movies, ...movies] : movies,
        totalPages,
      };
    }
    case SET_PAGE: {
      const { page } = payload;
      return { ...state, page: page > state.totalPages ? state.page : page };
    }
    case DO_SEARCH: {
      return { ...state };
    }
    case SET_FILTER_PARAMS: {
      const { params } = payload;
      return { ...state, filterParams: params, currentFetchType: 'filter' };
    }
    case SET_SEARCH_QUERY: {
      const { query } = payload;
      return { ...state, searchQuery: query, currentFetchType: 'search' };
    }
    default:
      return { ...state };
  }
}
