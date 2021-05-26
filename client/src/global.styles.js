import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Open Sans Condensed';
  padding: 20px 60px;
  background-image: url(/alternating-arrowhead.svg);
  background-attachment: fixed;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}
`;
