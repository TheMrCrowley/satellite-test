import React, { useState } from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { getWordsAction, resetWordsAction } from '../redux/store/reducers/wordsReducer';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchField = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchWord = () => {
    navigate('/results-page');
    dispatch(resetWordsAction());
    dispatch(getWordsAction({ word: inputValue }));
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Try it here..."
        variant="outlined"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <Button variant="contained" onClick={handleSearchWord}>
        Search!
      </Button>
    </>
  );
};

export default SearchField;
