import Image from 'next/image';
import axios from 'axios';
import { get } from 'lodash';
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type { Beer } from '@/types';

const BeerDetails = ({ beer } : Beer) => (

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
  try {
    results = await axios.get(beerIdUrl);
  } catch (error) {
    console.log(error);
  }
  const beer = get(results, 'data', []);

  return {
    props: {
      beer: beer[0],
    },
  };
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export default BeerDetails;
