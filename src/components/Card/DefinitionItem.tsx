import React, { FC, useState } from 'react';
import { IDefinitions } from '../../models/dictionaryTypes';
import { Collapse, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface DefinitionItemProps {
  definitionItem: IDefinitions;
}

const DefinitionItem: FC<DefinitionItemProps> = ({ definitionItem, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { definition, example, synonyms, antonyms } = definitionItem;

  const handleOpenList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <List>
      <ListItemButton onClick={handleOpenList}>
        <ListItemText primary={children} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit sx={{ paddingLeft: '2rem' }}>
        <Typography>Definition: {definition}</Typography>
        {example ? <Typography>Example: {example}</Typography> : null}
        {!!synonyms.length ? <Typography>Synonyms: {synonyms.join(', ')}</Typography> : null}
        {!!antonyms.length ? <Typography>Synonyms: {antonyms.join(', ')}</Typography> : null}
      </Collapse>
    </List>
  );
};

export default DefinitionItem;
