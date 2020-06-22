import React from 'react';
import GlobalStyle from './styles/global';
import MainHeader from './components/Header/index';
import PostList from './components/PostList/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <PostList />
    </>
  );
}

export default App;
