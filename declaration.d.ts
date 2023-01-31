import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    light: string;
    dark: string;
    breakingpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    },
  };
};
