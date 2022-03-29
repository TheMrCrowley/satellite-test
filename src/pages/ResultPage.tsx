import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTypedSelector from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { getWordsAction } from '../redux/store/reducers/wordsReducer';
import { AppRoutes } from '../models/routes';
import CircularProgress from '@mui/material/CircularProgress';
import CardList from '../components/Card/CardList';

const ResultPage = () => {
  const { request, words, error } = useTypedSelector((state) => state.words);
  const { word } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (words.length === 0 && word && word !== AppRoutes.RESULTS_PAGE) {
      dispatch(getWordsAction({ word }));
    }
  }, []);

  if (request) {
    return <CircularProgress />;
  }

  if (error) {
    navigate(`/${AppRoutes.ERROR_PAGE}`);
  }

  return <CardList words={words} />;
};

export default ResultPage;
