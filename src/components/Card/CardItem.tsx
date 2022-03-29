import React, { FC } from 'react';
import { styled } from '@mui/system';
import { Box, Card, Typography } from '@mui/material';
import { WordResponse } from '../../models/dictionaryTypes';
import SoundIcon from './SoundIcon';
import { findAudioUrl } from '../../helpers/findAudioUrl';
import MeaningList from './MeaningList';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem;
`;

const CardHeader = styled(Box)`
  display: flex;
  column-gap: 2rem;
  text-transform: capitalize;
`;

interface CardItemProps {
  wordDescription: WordResponse;
}

const CardItem: FC<CardItemProps> = ({ wordDescription }) => {
  const { word, origin, phonetic, phonetics, meanings } = wordDescription;
  const audioUrl = findAudioUrl(phonetics);

  const soundButtons = (audioUrl as string[]).map((url) => <SoundIcon key={url} url={url} />);

  const phoneticElement = () => {
    return phonetic ? (
      <Typography component="h3" variant="h5">
        {phonetic}
      </Typography>
    ) : null;
  };

  const originElement = () => {
    return origin ? (
      <Typography component="h3" variant="h5">
        Word origin: {phonetic}
      </Typography>
    ) : null;
  };

  const meaningsElement = () => (!!meanings.length ? <MeaningList meanings={meanings} /> : null);
  return (
    <StyledCard>
      <CardHeader>
        <Typography component="h2" variant="h2">
          {word}
        </Typography>
        {!!(audioUrl as string[]).length ? soundButtons : null}
      </CardHeader>
      {phoneticElement()}
      {originElement()}
      {meaningsElement()}
    </StyledCard>
  );
};

export default CardItem;
