import PropTypes from 'prop-types';
const MAX_LENGTH = 18;

export default function CompletedTable({ completedIdeas }) {

    return (<table>
        <thead>
            <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Type</th>
                <th>When</th>
            </tr>
        </thead>
        <tbody>
            {completedIdeas.map((idea,index) => <tr key={idea._id}>
                <td>{index + 1}</td>
                {idea.action.length > MAX_LENGTH 
                ? <td>{idea.action.slice(0, MAX_LENGTH) + "..."}</td>
                : <td>{idea.action}</td>
                }
                <td>{idea.theme}</td>
                 <td>{idea.date}</td>
            </tr>)}
        </tbody>
    </table>);
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