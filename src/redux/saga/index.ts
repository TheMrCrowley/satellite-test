import { all } from 'redux-saga/effects';
import wordsWatcher from './wordsSaga';

function* rootWatcher() {
  yield all([wordsWatcher()]);
}
export default rootWatcher;
