import React, { FC, useState } from 'react';
import { IMeanings } from '../../models/dictionaryTypes';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DefinitionList from './DefinitionList';
interface MeaningItemProps {
  meaning: IMeanings;
}

const MeaningItem: FC<MeaningItemProps> = ({ meaning }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenList = () => {
    setIsOpen(!isOpen);
  };

  const { definitions, partOfSpeech, synonyms, antonyms } = meaning;
  return (
    <List sx={{ paddingLeft: '1rem' }}>
      <ListItemButton onClick={handleOpenList}>
        <ListItemText primary={partOfSpeech} sx={{ textTransform: 'capitalize' }} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit sx={{ paddingLeft: '1rem' }}>
        <DefinitionList definitions={definitions} />
        {!!synonyms.length ? <Typography>Synonyms: {synonyms.join(', ')}</Typography> : null}
        {!!antonyms.length ? <Typography>Synonyms: {antonyms.join(', ')}</Typography> : null}
      </Collapse>
    </List>
  );
};

export default MeaningItem;
