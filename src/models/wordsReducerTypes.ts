import { WordResponse } from './dictionaryTypes';

export interface WordsState {
  words: WordResponse[];
  success: boolean;
  error: boolean;
  request: boolean;
}

export enum WordsActionTypes {
  GET_WORDS = 'GET_WORDS',
  SET_WORDS = 'SET_WORDS',
  WORDS_REQUEST = 'WORDS_REQUEST',
  REQUEST_SUCCESS = 'REQUEST_SUCCESS',
  REQUEST_ERROR = 'REQUEST_ERROR',
  WORDS_RESET = 'WORDS_RESET',
}

export interface GetWordsAction {
  type: WordsActionTypes.GET_WORDS;
  payload: { word: string };
}

export interface SetWordsAction {
  type: WordsActionTypes.SET_WORDS;
  payload: WordResponse[];
}

export interface WordsRequestAction {
  type: WordsActionTypes.WORDS_REQUEST;
}

export interface RequestSuccessAction {
  type: WordsActionTypes.REQUEST_SUCCESS;
}

export interface RequestErrorAction {
  type: WordsActionTypes.REQUEST_ERROR;
}

export interface WordsResetAction {
  type: WordsActionTypes.WORDS_RESET;
}

export type WordsReducerActions =
  | GetWordsAction
  | SetWordsAction
  | RequestSuccessAction
  | RequestErrorAction
  | WordsResetAction
  | WordsRequestAction;
