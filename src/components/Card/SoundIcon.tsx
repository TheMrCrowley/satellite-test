import React, { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import useAudio from '../../hooks/useAudio';

interface SoundIconProps {
  url: string;
}
const SoundIcon: FC<SoundIconProps> = ({ url }) => {
  const playAudio = useAudio(url);

  return (
    <IconButton onClick={playAudio}>
      <VolumeUpIcon fontSize="large" />
    </IconButton>
  );
};

export default SoundIcon;
