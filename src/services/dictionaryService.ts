import { WordResponse } from '../models/dictionaryTypes';
import axios from 'axios';

export default class dictionaryService {
  static getWordDescription = async (word: string): Promise<WordResponse[]> => {
    const response = await axios.get<WordResponse[]>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return response.data;
  };
}
