import Link from 'next/Link';
import { Box } from '@mui/system';
import { ListItem, List } from '@mui/material';

const Home = () => (
  <Box>
    <Box className="landing">
      <List className="menu">
        <ListItem className="beers_menu">
          <Link href="/beers">Beers</Link>
        </ListItem>
        <ListItem>
          <Link href="/my-account">My Account</Link>
        </ListItem>
      </List>
    </Box>
  </Box>
);

export default Home;
