import Image from 'next/image';
import axios from 'axios';
import { get } from 'lodash';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import type { Beer } from '@/types';

const BeerId = ({ beer } : Beer) => (

  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Card sx={{ maxWidth: 345, marginTop: '2rem' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="600"
          image={beer.image_url}
          alt={beer.name}
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            {beer.name}
          </Typography>
          <Typography variant="h6" sx={{ textDecoration: 'underline' }} color="text.secondary">
            {beer.tagline}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight="bold" marginTop={2} marginBottom={2}>
            Date brewed:
            {' '}
            {beer.first_brewed}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {beer.description}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            {beer.abv}
            {' '}
            %
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Box>

);

export async function getStaticProps({ params }) {
  let results = [];

  const beerIdUrl = `https://api.punkapi.com/v2/beers/${params.beerId}`;
  results = await axios.get(beerIdUrl);
  const beer = get(results, 'data', []);
  console.log(results);

  return {
    props: {
      beer: beer[0],
    },
  };
}

export async function getStaticPaths() {
  const allBeersUrl = 'https://api.punkapi.com/v2/beers';

  let results = [];
  results = await axios.get(allBeersUrl);

  const beers = get(results, 'data', []);

  return {
    paths: beers.map((beer: Beer) => ({
      params: {
        beerId: beer.id.toString(),
      },
    })),
    fallback: false,
  };
}

export default BeerId;
