import Link from 'next/Link';
import { Box } from '@mui/system';
import { List, ListItem } from '@mui/material';

const Home = () => (
  <Box>
    <Box>
      <List>
        <ListItem>
          <Link href="/beers">Beers</Link>
        </ListItem>
        <ListItem>
          <Link href="/my-account">My Account</Link>
        </ListItem>
        <ListItem>
          <Link href="/test">test</Link>
        </ListItem>
      </List>
    </Box>
  </Box>
);

export default Home;
