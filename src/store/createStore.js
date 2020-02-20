import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import filterPanelReducer from '../reducers/filterPanelReducer';
import saga from '../sagas/sagas';
import searchReducer from '../reducers/searchReducer';
import { sidebarReducer } from '../reducers/sidebarReducer';

const rootReducer = combineReducers({
  filterPanel: filterPanelReducer,
  search: searchReducer,
  sidebarMovie: sidebarReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(saga);

export default store;
