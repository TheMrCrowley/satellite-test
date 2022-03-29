import React, { FC } from 'react';
import { WordResponse } from '../../models/dictionaryTypes';
import CardItem from './CardItem';

interface CardListProps {
  words: WordResponse[];
}
const CardList: FC<CardListProps> = ({ words }) => {
  return (
    <>
      {words.map((word, index) => (
        <CardItem key={index} wordDescription={word} />
      ))}
    </>
  );
};

export default CardList;
