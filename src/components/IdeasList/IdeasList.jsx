import css from "./IdeasList.module.css";


export default function IdeasList({ideas, getCurrentIdea}) {
                 

    return (ideas.map(idea => (
        <li
            className={css.ideaItem}
            key={idea.id}>
            <p className={css.ideaAction}>
            {idea.action}</p>
            <p>{idea.theme}</p>
            <button  onClick={() => getCurrentIdea(idea.id)}>get idea</button>
        </li>
    )));
};