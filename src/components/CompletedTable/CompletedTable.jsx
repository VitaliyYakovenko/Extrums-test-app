import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const MAX_LENGTH = 18;


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CompletedTable({ completedIdeas }) {

    return (<TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow>
                <StyledTableCell align="left">Number</StyledTableCell>
                <StyledTableCell align="left">Title</StyledTableCell>
                <StyledTableCell align="left">Type</StyledTableCell>
                <StyledTableCell align="left">When</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
                {completedIdeas.map((idea, index) =>
                <StyledTableRow key={idea._id}>
                <StyledTableCell align="left">{index + 1}</StyledTableCell>
                {idea.action.length > MAX_LENGTH 
                ? <StyledTableCell align="left">{idea.action.slice(0, MAX_LENGTH) + "..."}</StyledTableCell>
                : <StyledTableCell align="left">{idea.action}</StyledTableCell>
                }
                <td>{idea.theme}</td>
                 <td>{idea.date}</td>
            </StyledTableRow>)}
        </TableBody>
     </Table>   
    </TableContainer>);
};



CompletedTable.propTypes = {
    completedIdeas: PropTypes.arrayOf(
         PropTypes.shape({
            _id: PropTypes.string.isRequired,
            action: PropTypes.string.isRequired,
            date: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
            done: PropTypes.bool.isRequired,
            theme: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
         })
    )
};


