import Link from 'next/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Home = () => (
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
);

export default Home;
