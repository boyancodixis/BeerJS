import { useState } from 'react';
import axios from 'axios';
import { get } from 'lodash';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { Beer } from '@/types';
import GridView from '../../components/GridView';
import TableView from '../../components/TableView';
import ViewSwitch from '../../components/ViewSwitch';

export async function getServerSideProps() {
  let beerData = [];
  const beerUrl = 'https://api.punkapi.com/v2/beers?per_page=80';
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

  function triggerTableView() {
    setTableView(!tableView);
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
        <Box sx={{ display: 'flex' }}>
          <FormControlLabel
            onClick={() => triggerTableView()}
            control={<ViewSwitch sx={{ m: 1 }} />}
            label="Table View"
          />
        </Box>
      </Box>
      {tableView ? <TableView beers={data} /> : <GridView beers={data} />}
      {data.length === 0 && <Typography>No Beers</Typography>}
    </Box>
  );
};
export default Beers;
