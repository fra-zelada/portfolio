import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs: true; // removes the `xs` breakpoint
      sm: true;
      md: true;
      lg: true;
      xl: true;
      mobile: true; // adds the `mobile` breakpoint
      tablet: false;
      laptop: false;
      desktop: false;
    }
  }
export const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          mobile: 410,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      }
});