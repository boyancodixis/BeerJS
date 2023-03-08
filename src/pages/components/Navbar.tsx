import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
