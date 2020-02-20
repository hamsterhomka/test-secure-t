import {
  call, put, select, spawn, takeLatest,
} from 'redux-saga/effects';
import { DO_SEARCH, FETCH_FILTER_GENRES_REQUEST, FETCH_SIDEBAR_REQUEST } from '../actions/actionTypes';
import {
  fetchFilterMovies, fetchGenres, fetchSearch, fetchSidebarMovie,
} from '../api';
import { fetchFilterGenresFailure, fetchFilterGenresSuccess } from '../actions/filterActions';
import { fetchFilterSearchFailure, fetchFilterSearchRequest, fetchFilterSearchSuccess } from '../actions/searchActions';
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

function* handleSidebarMovieSaga({ payload }) {
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

function* handleDoSearchSaga({ history }) {
  const {
    currentFetchType, filterParams, searchQuery, page,
  } = yield select((state) => state.search);

  try {
    yield put(fetchFilterSearchRequest());
    const movies = currentFetchType === 'filter'
      ? yield call(fetchFilterMovies, {
        ...filterParams,
        page,
      })
      : yield call(fetchSearch, {
        query: searchQuery,
        page,
      });
    yield put(fetchFilterSearchSuccess(movies.results, movies.total_pages));
    yield call(() => history.push('/search'));
  } catch (e) {
    yield put(fetchFilterSearchFailure(e.message));
  }
}

function* watchDoSearchSaga() {
  yield takeLatest(DO_SEARCH, handleDoSearchSaga);
}

export default function* saga() {
  yield spawn(watchFilterGenresSaga);
  yield spawn(watchSidebarMovieSaga);
  yield spawn(watchDoSearchSaga);
}
