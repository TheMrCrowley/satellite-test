export interface WordResponse {
  word: string;
  phonetic: string;
  phonetics: PhoneticsType;
  origin: string;
  meanings: MeaningType;
}

interface IPhonetics {
  text: string;
  audio: string;
}

export type PhoneticsType = Array<IPhonetics>;

export interface IMeanings {
  partOfSpeech: string;
  definitions: DefinitionsType;
  synonyms: string[];
  antonyms: string[];
}

export interface IDefinitions {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

export type DefinitionsType = Array<IDefinitions>;
export type MeaningType = Array<IMeanings>;
