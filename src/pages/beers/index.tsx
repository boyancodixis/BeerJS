import { Roboto } from 'next/font/google';
import axios from 'axios';
import Beer from '@/types';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Typography } from '@mui/material';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

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
  <Box className={roboto.className}>
    <Typography>Beer JS</Typography>
    {data.length === 0 ? <h1>No beers</h1> : (
      <Box className="beers_grid">
        {data.map((beer: Beer) => (
          <Box key={beer.id} className="beers">
            <img src={beer.image_url} alt="beer_image" />
            <Typography className="beer_name">{beer.name}</Typography>
            <Typography>{beer.tagline}</Typography>
            <Typography>
              {beer.abv}
              %
            </Typography>
          </Box>
        ))}
      </Box>
    )}
  </Box>
);
export default Beers;
