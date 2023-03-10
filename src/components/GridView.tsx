import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { Beer } from '@/types';

const GridView = ({ beers } : Beer[]) => (
  <Box sx={{ color: 'primary.main', alignContent: 'center', padding: '4rem' }}>
    <Box sx={{ display: 'flex' }} />
    <Grid
      alignItems="center"
      justifyContent="center"
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={{ xs: 2, md: 4 }}
    >
      {beers.map((beer: Beer) => (
        <Grid item key={beer.id} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: '30rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '2rem', boxShadow: 3,
            }}
          >
            <Image width={50} height={190} src={beer.image_url} alt="beer" />
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography gutterBottom variant="h5" fontWeight="bold" component="h2">
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
export default GridView;
