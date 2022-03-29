import {
  GetWordsAction,
  RequestErrorAction,
  RequestSuccessAction,
  SetWordsAction,
  WordsActionTypes,
  WordsReducerActions,
  WordsRequestAction,
  WordsResetAction,
  WordsState,
} from '../../../models/wordsReducerTypes';
import { WordResponse } from '../../../models/dictionaryTypes';

const wordsInitialState: WordsState = {
  words: [],
  success: false,
  error: false,
  request: false,
};

export const wordsReducer = (
  state = wordsInitialState,
  action: WordsReducerActions
): WordsState => {
  switch (action.type) {
    case WordsActionTypes.SET_WORDS:
      return { ...state, words: [...action.payload] };
    case WordsActionTypes.WORDS_REQUEST:
      return { ...state, request: true };
    case WordsActionTypes.REQUEST_SUCCESS:
      return { ...state, success: true, request: false };
    case WordsActionTypes.REQUEST_ERROR:
      return { ...state, error: true, request: false };
    case WordsActionTypes.WORDS_RESET:
      return { ...wordsInitialState };
    default:
      return state;
  }
};

export const getWordsAction = (payload: { word: string }): GetWordsAction => ({
  type: WordsActionTypes.GET_WORDS,
  payload,
});

export const setWordsAction = (payload: WordResponse[]): SetWordsAction => ({
  type: WordsActionTypes.SET_WORDS,
  payload,
});

export const wordsRequestAction = (): WordsRequestAction => ({
  type: WordsActionTypes.WORDS_REQUEST,
});

export const requestSuccessAction = (): RequestSuccessAction => ({
  type: WordsActionTypes.REQUEST_SUCCESS,
});

export const requestErrorAction = (): RequestErrorAction => ({
  type: WordsActionTypes.REQUEST_ERROR,
});

export const resetWordsAction = (): WordsResetAction => ({ type: WordsActionTypes.WORDS_RESET });
