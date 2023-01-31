import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${({ fontFamily }: { fontFamily: any }) => fontFamily};
  }

  body {
    background-color: ${({ theme }) => theme.light};
  }

  @media print {
    body {
      padding: 2rem;
      zoom: .75;
    }
  }

  @page { size: auto;  margin: 0mm; }
`;

export default GlobalStyle;
