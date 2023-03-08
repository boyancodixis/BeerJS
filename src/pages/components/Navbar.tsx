import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';

const Navbar = () => (
  <CssBaseline>

    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" margin={0}>
          BeerJS
        </Typography>
        <Typography variant="h6" color="inherit">
          My account
        </Typography>
      </Toolbar>
    </AppBar>
  </CssBaseline>
);

export default Navbar;
