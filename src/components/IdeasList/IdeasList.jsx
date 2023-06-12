import PropTypes from 'prop-types'
import css from "./IdeasList.module.css";


export default function IdeasList({ideas, getCurrentIdea}) {

    return (ideas.map(idea => (
        <li
            className={css.ideaItem}
            key={idea._id}>
            <p className={css.ideaAction}>
            {idea.action}</p>
            <p>{idea.theme}</p>
            <button  onClick={() => getCurrentIdea(idea._id)}>get idea</button>
        </li>
    )));
};



IdeasList.propTypes = {
    ideas: PropTypes.arrayOf(
         PropTypes.shape({
            _id: PropTypes.string.isRequired,
            action: PropTypes.string.isRequired,
            date: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
            done: PropTypes.bool.isRequired,
            theme: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
         })
    ), getCurrentIdea: PropTypes.func.isRequired,
};