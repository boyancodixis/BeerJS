import { useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'lodash';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { Beer, ViewType } from '@/types';
import { BeerView } from '@/constants';
import GridView from '../../components/GridView';
import TableView from '../../components/TableView';
import ViewSwitch from '../../components/ViewSwitch';

const Beers = ({ data } : Beer[]) => {
  const [view, setView] = useState<ViewType>(BeerView.grid);
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState<Beer[]>();

  const getBeers = async () => {
    const beerUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`;
    try {
      const allBeers = await axios.get(beerUrl);
      setBeers(allBeers.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, [page]);

  const handlePageChange = (e:object, p:number) => {
    setPage(p);
  };

  const triggerTableView = () => {
    if (view === BeerView.grid) {
      setView(BeerView.table);
    } else {
      setView(BeerView.grid);
    }
  };

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
        <Typography variant="h5" mb={3}>
          Choose a view
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ marginTop: '.5rem', marginRight: '1rem' }}>
            Grid View
          </Typography>
          <FormControlLabel
            onClick={triggerTableView}
            control={<ViewSwitch sx={{ m: 1, ml: 3, mb: 3 }} />}
            label=""
          />
          <Typography sx={{ marginTop: '.5rem' }}>Table View</Typography>
        </Box>
      </Box>
      {view === 'grid' ? <GridView beerData={beers} /> : <TableView beerData={beers} />}
      {beers?.length === 0 && <Typography>No Beers</Typography>}
      <Pagination sx={{ display: 'flex', justifyContent: 'center' }} size="large" count={beers?.length} onChange={handlePageChange} />
    </Box>
  );
};
export default Beers;
