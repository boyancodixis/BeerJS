import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { get } from 'lodash';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { Beer } from '@/types';
import GridView from '../components/GridView';
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
  const [tableView, setTableView] = useState(false);
  const [gridView, setGridView] = useState(true);

  function triggerTableView() {
    setTableView(!tableView);
  }

  function triggerGridView() {
    setGridView(!gridView);
  }

  if (tableView === false && gridView === false) {
    setGridView(true);
  }

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
        <Button variant="contained" onClick={() => triggerGridView()}>Grid</Button>
        <Button variant="contained" onClick={() => triggerTableView()} sx={{ marginTop: '1rem', marginBottom: '1rem' }}>Table</Button>
      </Box>
      {tableView && <TableView beers={data} />}
      {gridView && <GridView beers={data} />}
      {data.length === 0 && <Typography>No Beers</Typography>}
    </Box>
  );
};
export default Beers;
