import { useEffect, useState } from "react";
import { getAllIdeas } from "../../rest-api/getAllIdeas";
import {formatUnixTime} from "../../utils/convertUnixTime";
import SelectedIdeas from "../../components/SelectedIdeas/SelectedIdeas";
import { doneIdeaById } from "../../rest-api/doneIdeaById";
import css from "./Home.module.css";

export default function Home() {
    const [ideas, setIdeas] = useState([]);


    useEffect(() => { 
       getAllIdeas().then(resp => setIdeas(resp.data));
     }, []);
 
      const getIdeasById = (id) => {
      const currentDate = new Date();
      const unixTime = Math.floor(currentDate.getTime() / 1000);  
      const time = formatUnixTime(unixTime);
      doneIdeaById (id, time);
    
      setIdeas(ideas.filter(idea => idea._id !== id));
     };

  const visibleIdeas = ideas.filter(idea => idea.status === "selected" && !idea.done);
  return (
    <div className={css.homeContainer}>
     <h1>Ideas in my list</h1>  
    {visibleIdeas.length === 0
    ? <p>Add some idea on Ideas page</p>
    : <ul className={css.ideasList}>
      <SelectedIdeas
      getIdeasById={getIdeasById}      
      ideas={visibleIdeas} />
    </ul> }
  </div>)
};