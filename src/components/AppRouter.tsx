import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
// import HomePage from '../pages/HomePage';
import ResultPage from '../pages/ResultPage';
import { AppRoutes } from '../models/routes';
import ErrorPage from '../pages/ErrorPage';
const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.INDEX} element={<Layout />}>
        <Route path={AppRoutes.HOME_PAGE} />
        <Route path={AppRoutes.RESULTS_PAGE} element={<ResultPage />} />
        <Route path={AppRoutes.DYNAMIC_WORD} element={<ResultPage />} />
        <Route path={AppRoutes.ERROR_PAGE} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
