import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { wordsReducer } from './reducers/wordsReducer';
import rootWatcher from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  words: wordsReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export type RootState = ReturnType<typeof rootReducer>;
sagaMiddleware.run(rootWatcher);
export default store;
