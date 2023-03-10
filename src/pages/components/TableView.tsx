import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import type { Beer } from '@/types';

const TableView = ({ beers }) => (
  <Box sx={{ color: 'primary.main', alignContent: 'center', padding: '4rem' }}>
    <TableContainer sx={{ boxShadow: 3 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="right">Abv</TableCell>
            <TableCell align="right">First Brewed</TableCell>
            <TableCell align="right">Contributed By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beers.map((beer:Beer) => (
            <TableRow key={beer.id}>
              <TableCell align="right">{beer.id}</TableCell>
              <TableCell align="center">{beer.name}</TableCell>
              <TableCell align="right">{beer.abv}</TableCell>
              <TableCell align="right">{beer.first_brewed}</TableCell>
              <TableCell align="right">{beer.contributed_by}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>

);

export default TableView;
