import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { get } from 'lodash';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { Beer } from '@/types';
import TableView from '../components/TableView';

export async function getServerSideProps() {
  let beerData = [];
  const beerUrl = 'https://api.punkapi.com/v2/beers';
  try {
    beerData = await axios.get(beerUrl);
  } catch (error) {
    console.error(error);
  }

  const data = get(beerData, 'data', []);

  return {
    props: {
      data,
    },

  };
}
const Beers = ({ data } : Beer) => {
  const [tableView, setTableView] = useState(true);

  function triggerTableView() {
    setTableView(!tableView);
    console.log(tableView);
  }

  // two buttons : table & grid. Only grid is true on load then if table is clicked set its state to
  // true and set the grid to false. Both can't be false. If a view is clicked and its state
  // is already true do ???.

  return (
    <Box sx={{ color: 'primary.main', alignContent: 'center', padding: '4rem' }}>
      <Typography variant="h3" align="center" fontWeight="bold" sx={{ textDecoration: 'underline' }}>Beers</Typography>
      <Box sx={{ display: 'flex' }}>
        <TextField
          sx={{
            color: 'white',
            width: '30%',
            marginBottom: '3rem',
          }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button>Search</Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', float: 'left' }}>
        <Typography variant="h5">
          Choose a view
        </Typography>
        <Button variant="contained">Grid</Button>
        <Button variant="contained" onClick={() => triggerTableView()} sx={{ marginTop: '1rem', marginBottom: '1rem' }}>Table</Button>
      </Box>
      {tableView && <TableView beers={data} />}
      {data.length === 0 && <Typography>No Beers</Typography>}
      <Grid
        alignItems="center"
        justifyContent="center"
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 4 }}
      >
        {data.map((beer: Beer) => (
          <Grid item key={beer.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '2rem', boxShadow: 3,
              }}
            >
              <Image width={50} height={150} src={beer.image_url} alt="beer" />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography gutterBottom variant="h4" fontWeight="bold" component="h2">
                  {beer.name}
                </Typography>
                <Typography variant="h6">
                  {beer.tagline}
                </Typography>
                <Typography variant="h6">
                  {beer.abv}
                  {' '}
                  %
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'red',
                    fontSize: 30,
                    fontStyle: 'italic',
                  }}
                  href={`/beers/${beer.id}`}
                >
                  <Button variant="outlined" sx={{ textDecoration: 'none' }}>
                    Learn more
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Beers;
