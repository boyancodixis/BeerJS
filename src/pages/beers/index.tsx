import Image from 'next/image';
import axios from 'axios';
import { get } from 'lodash';
import {
  CardContent, CardActions, Button, Grid, CardMedia, Card, Typography, Box, TextField,
} from '@mui/material';

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
          <Grid item key={beer.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <Image loader={() => beer.image_url} width={50} height={150} src={beer.image_url} alt="beer" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    )}
  </Box>
);
export default Beers;
