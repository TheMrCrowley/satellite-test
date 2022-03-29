import { takeEvery, call, put } from 'redux-saga/effects';
import { GetWordsAction, WordsActionTypes } from '../../models/wordsReducerTypes';
import { WordResponse } from '../../models/dictionaryTypes';
import dictionaryService from '../../services/dictionaryService';
import {
  requestErrorAction,
  requestSuccessAction,
  setWordsAction,
  wordsRequestAction,
} from '../store/reducers/wordsReducer';

function* getWordsWorker(action: GetWordsAction) {
  try {
    const { word } = action.payload;
    yield put(wordsRequestAction());
    const wordsResponse: WordResponse[] = yield call(dictionaryService.getWordDescription, word);
    yield put(requestSuccessAction());
    yield put(setWordsAction(wordsResponse));
  } catch (e) {
    yield put(requestErrorAction());
  }
}

function* wordsWatcher() {
  yield takeEvery(WordsActionTypes.GET_WORDS, getWordsWorker);
}

export default wordsWatcher;
