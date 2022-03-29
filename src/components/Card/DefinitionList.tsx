import React, { FC } from 'react';
import { DefinitionsType } from '../../models/dictionaryTypes';
import { List } from '@mui/material';
import DefinitionItem from './DefinitionItem';

interface DefinitionListProps {
  definitions: DefinitionsType;
}

const DefinitionList: FC<DefinitionListProps> = ({ definitions }) => {
  return (
    <List sx={{ paddingLeft: '1rem' }}>
      {definitions.map((definition, index) => (
        <DefinitionItem key={index + Math.random()} definitionItem={definition}>
          {index + 1}
        </DefinitionItem>
      ))}
    </List>
  );
};

export default DefinitionList;
