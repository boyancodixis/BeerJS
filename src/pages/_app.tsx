import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#03a9f4',
    },
    secondary: {
      main: '#03a9f4',
    },
    background: {
      default: '#20c34',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Layout>
);
export default App;
