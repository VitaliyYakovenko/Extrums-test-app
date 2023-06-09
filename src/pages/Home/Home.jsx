import { useEffect, useState } from "react"
import { getAllIdeas } from "../../rest-api/getAllIdeas";
import SelectedIdeas from "../../components/SelectedIdeas/SelectedIdeas";
import { doneIdeaById } from "../../rest-api/doneIdeaById";
import css from "./Home.module.css";

export default function Home() {
  const [ideas, setIdeas] = useState([]);


  useEffect(() => { 
       getAllIdeas().then(resp => setIdeas(resp));
  }, []);
 
  const getIdeasById = (id) => {
      console.log(id);
      doneIdeaById(id);
      setIdeas(ideas.filter(idea => idea.id !== id));
  };

  const visibleIdeas = ideas.filter(idea => idea.status === "selected" && idea.done === false);
  
  return (
    <div className={css.homeContainer}>
    {visibleIdeas.length === 0
    ? <p>Add some idea on Ideas page</p>
    : <ul className={css.ideasList}>
      <SelectedIdeas
      getIdeasById={getIdeasById}      
      ideas={visibleIdeas} />
    </ul> }
  </div>)
};