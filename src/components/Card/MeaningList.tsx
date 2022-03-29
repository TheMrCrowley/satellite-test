import React, { FC, useState } from 'react';
import { MeaningType } from '../../models/dictionaryTypes';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PasswordIcon from '@mui/icons-material/Password';
import MeaningItem from './MeaningItem';

interface MeaningListProps {
  meanings: MeaningType;
}
const MeaningList: FC<MeaningListProps> = ({ meanings }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenList = () => {
    setIsOpen(!isOpen);
  };

  const meaningItems = meanings.map((meaning) => (
    <MeaningItem key={meaning.partOfSpeech + Math.random()} meaning={meaning} />
  ));
  return (
    <List>
      <ListItemButton onClick={handleOpenList}>
        <ListItemIcon>
          <PasswordIcon />
        </ListItemIcon>
        <ListItemText primary="Meanings" />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {meaningItems}
      </Collapse>
    </List>
  );
};

export default MeaningList;
