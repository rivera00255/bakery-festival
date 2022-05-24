import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Main from './page/Main';

const GlobalStyle = createGlobalStyle`
    html, body, * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Noto Sans KR', sans-serif; */
        color: #444;
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: #444;
    }
`;

function App() {
  return (
    <>
        <GlobalStyle />
        <Header />
        <Main />
    </>
  );
}

export default App;
