import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/system/Stack';
import Typography from '@mui/material/Typography';

const Navbar = () => (
  <CssBaseline>
    <AppBar position="static" sx={{ display: 'flex', p: 3 }}>
      <Toolbar>
        <Typography variant="h5" color="inherit" margin={0} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          BeerJS
        </Typography>
        <Stack direction="row" spacing={3}>
          <Button color="inherit" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
            My Account
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  </CssBaseline>
);

export default Navbar;
