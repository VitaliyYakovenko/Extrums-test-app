



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
            {completedIdeas.map((idea,index) => <tr key={idea.id}>
                <td>{index + 1}</td>
                <td>{idea.action}</td>
                <td>{idea.theme}</td>
                <td>{idea.date}</td>
            </tr>)}
        </tbody>
    </table>);
};