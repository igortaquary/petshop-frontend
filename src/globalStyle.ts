import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FEF9EF;
    div {
      overflow-x: hidden;
    }
    font-family: 'Roboto', sans-serif;
  }
`;