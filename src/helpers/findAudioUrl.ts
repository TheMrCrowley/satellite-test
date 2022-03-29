import { PhoneticsType } from '../models/dictionaryTypes';

export const findAudioUrl = (phoneticsField: PhoneticsType): string[] | boolean => {
  const arrayWithSound = phoneticsField.filter((field) => field.audio);
  return arrayWithSound.map((item) => item.audio);
};
