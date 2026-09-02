import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#418CFB' },
    text: {
      primary: '#003055',
      secondary: '#697586',
    },
    divider: '#E6E6E6',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;