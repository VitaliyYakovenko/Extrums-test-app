import PropTypes from 'prop-types'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
} from '@mui/material';



export default function AchievementsList({visibleAch}) {

    const countByTheme = visibleAch.reduce((acc, item) => {
      const { theme } = item;
      if (acc[theme]) {
      acc[theme] += 1;
      } else {
      acc[theme] = 1;
      }
      return acc;
    }, {});
        
    const countByThemeArray = Object.entries(countByTheme).map(([theme, count]) => ({ theme, count }));

    return (<TableContainer>
        <Table sx={{ maxWidth: 250 , margin: "auto"}} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell align="left">Theme</TableCell>
                <TableCell align="right">Quantity</TableCell>
                </TableRow>    
            </TableHead>
            <TableBody >
                {countByThemeArray.map(count => (
                    <TableRow key={count.theme}>
                 <TableCell  scope="row" align="left">{count.theme}</TableCell>
                 <TableCell  scope="row" align="right">{count.count}</TableCell>   
                   </TableRow> 
                ))}
            </TableBody>
        </Table>
    </TableContainer>
 
)};

AchievementsList.propTypes = {
    visibleAchL: PropTypes.arrayOf(
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


