import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { Outlet } from 'react-router-dom';
import SearchField from './SearchField';

const StyledContainer = styled(Container)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  padding: 2rem 1rem;
`;

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <StyledContainer>
        <SearchField />
        <Outlet />
      </StyledContainer>
    </>
  );
};

export default Layout;
