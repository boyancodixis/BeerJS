import { Box, width } from '@mui/system';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Beer from '@/types';
import Image from 'next/image';

export async function getServerSideProps() {
  let beerData = [];
  const beerUrl = 'https://api.punkapi.com/v2/beers';
  try {
    beerData = await axios.get(beerUrl);
  } catch (error) {
    console.error(error);
  }

  let data = [];
  if (beerData.length === 0) {
    data = [];
  } else {
    data = beerData.data;
  }

  return {
    props: {
      data,
    },

  };
}

const Beers = ({ data } : Beer) => (
  <Box sx={{ color: 'primary.main' }}>
    <Typography align="center">Beer JS</Typography>
    {data.length === 0 ? <Typography>No Beers</Typography> : (
      <Grid alignItems="center" container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((beer: Beer) => (
          <Grid item xs={2} sm={4} md={4} key={beer.id}>
            <Box
              sx={{
                padding: '1rem',
                border: 1,
                borderRadius: '15px',
                textAlign: 'center',
                width: '12rem',
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
