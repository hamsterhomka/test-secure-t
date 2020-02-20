import {
  call, put, spawn, takeLatest,
} from 'redux-saga/effects';
import {
  FETCH_FILTER_GENRES_REQUEST,
  FETCH_FILTER_SEARCH_REQUEST,
  FETCH_SEARCH_REQUEST,
  FETCH_SIDEBAR_REQUEST,
} from '../actions/actionTypes';
import {
  fetchFilterMovies, fetchGenres, fetchSearch, fetchSidebarMovie,
} from '../api';
import { fetchFilterGenresFailure, fetchFilterGenresSuccess } from '../actions/filterActions';
import {
  fetchFilterSearchFailure,
  fetchFilterSearchSuccess,
  fetchSearchFailure,
  fetchSearchSuccess,
  setFilterParams,
} from '../actions/searchActions';
import { fetchSidebarFailure, fetchSidebarSuccess } from '../actions/sidebarActions';

function* handleFilterGenresSaga() {
  try {
    const genres = yield call(fetchGenres);
    yield put(fetchFilterGenresSuccess(genres.genres));
  } catch (e) {
    yield put(fetchFilterGenresFailure(e.message));
  }
}

function* watchFilterGenresSaga() {
  yield takeLatest(FETCH_FILTER_GENRES_REQUEST, handleFilterGenresSaga);
}

function* handleFilterSearchSaga({ payload: { params }, history }) {
  console.log(params);
  try {
    const movies = yield call(fetchFilterMovies, params);
    yield put(fetchFilterSearchSuccess(movies.results));
    yield put(setFilterParams(params));
    yield call(() => history.push('/search'));
  } catch (e) {
    yield put(fetchFilterSearchFailure(e.message));
  }
}

function* watchFilterSearchSaga() {
  yield takeLatest(FETCH_FILTER_SEARCH_REQUEST, handleFilterSearchSaga);
}

function* handleSidebarMovieSaga({ payload }) {
  console.log(payload);
  try {
    const movie = yield call(fetchSidebarMovie, payload.id);
    yield put(fetchSidebarSuccess(movie));
  } catch (e) {
    yield put(fetchSidebarFailure(e.message));
  }
}

function* watchSidebarMovieSaga() {
  yield takeLatest(FETCH_SIDEBAR_REQUEST, handleSidebarMovieSaga);
}

function* handleSearchSaga({ payload, history }) {
  console.log(payload);
  try {
    const movies = yield call(fetchSearch, payload.query);
    yield put(fetchSearchSuccess(movies.results));
    yield call(() => history.push('/search'));
  } catch (e) {
    yield put(fetchSearchFailure(e.message));
  }
}

function* watchSearchSaga() {
  yield takeLatest(FETCH_SEARCH_REQUEST, handleSearchSaga);
}

// function* handleSetFilterParamsSaga() {
//   yield put(doSearchFetch);
// }
//
// function* watchSetFilterParamsSaga() {
//   yield takeLatest(SET_FILTER_PARAMS, handleSetFilterParamsSaga);
// }
//
// function* handleDoSearchSaga() {
//   try {
//     const movies = yield call(fetchFilterMovies, params);
//     yield put(fetchFilterSearchSuccess(movies.results));
//     yield put(setFilterParams(params));
//     yield call(() => history.push('/search'));
//   } catch (e) {
//     yield put(fetchFilterSearchFailure(e.message));
//   }
// }
//
// function* watchDoSearchSaga() {
//   yield takeLatest(DO_SEARCH, handleDoSearchSaga);
// }

export default function* saga() {
  yield spawn(watchFilterGenresSaga);
  yield spawn(watchFilterSearchSaga);
  yield spawn(watchSidebarMovieSaga);
  yield spawn(watchSearchSaga);
  // yield spawn(watchSetFilterParamsSaga);
}
