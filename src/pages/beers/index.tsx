import Image from 'next/image';
import axios from 'axios';
import { get } from 'lodash';
import { Typography, Box, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Beer from '@/types';

// todo : layout;

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

const Beers = ({ data } : Beer) => (
  <Box sx={{ color: 'primary.main', alignContent: 'center' }}>
    <Typography variant="h3" align="center">Beers</Typography>
    <TextField sx={{ color: 'white' }} id="outlined-basic" label="Outlined" variant="outlined" />
    {data.length === 0 ? <Typography>No Beers</Typography> : (
      <Grid
        alignItems="center"
        justifyContent="center"
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 4 }}
      >
        {data.map((beer: Beer) => (
          <Grid item xs={2} sm={4} md={4} key={beer.id}>
            <Box
              sx={{
                padding: '1rem',
                border: 1,
                borderRadius: '15px',
                textAlign: 'center',
                width: '12rem',
                boxShadow: 3,
              }}
              key={beer.id}
            >
              <Image width={40} height={100} unoptimized loader={() => beer.image_url} src={beer.image_url} alt="beer_image" />
              <Typography>{beer.name}</Typography>
              <Typography>{beer.tagline}</Typography>
              <Typography>
                {beer.abv}
                %
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    )}
  </Box>
);
export default Beers;
