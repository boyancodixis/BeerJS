import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

const Footer = () => (
  <CssBaseline>
    <Box
      sx={{
        bgcolor: 'secondary.main',
        p: 3,
        width: '100%',
      }}
      component="footer"
    >
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Copyright
      </Typography>
    </Box>
  </CssBaseline>
);

export default Footer;
