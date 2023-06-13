import { useEffect, useState } from "react";
import { getAllSelectedIdeas} from "../../rest-api/getAllSelectedIdeas";
import {formatUnixTime} from "../../utils/convertUnixTime";
import SelectedIdeas from "../../components/SelectedIdeas/SelectedIdeas";
import { doneIdeaById } from "../../rest-api/doneIdeaById";
import { Typography, Box } from "@mui/material";
import { successMessageDone } from "../../utils/successMessageDone";
import css from "./Home.module.css";

export default function Home() {
    const [ideas, setIdeas] = useState([]);


    useEffect(() => { 
       getAllSelectedIdeas().then(resp => setIdeas(resp.data));
     }, []);
 
      const getIdeasById = (id) => {
      const currentDate = new Date();
      const unixTime = Math.floor(currentDate.getTime() / 1000);  
      const time = formatUnixTime(unixTime);
      doneIdeaById(id, time);
        
      successMessageDone();
      setIdeas(ideas.filter(idea => idea._id !== id));
    };
     
   
  const visibleIdeas = ideas.filter(idea => idea.status === "selected" && !idea.done);
  return (
    <Box>
      <Typography
      component="h1"  
      variant="h3"
      mt={2}
      mb={3}
      className={css.homeTitle}    
      >
      Ideas in my list
      </Typography>  
    {visibleIdeas.length === 0
    ? <Typography
        component="p"
        className={css.homeMessage}
        variant="h5"
        >
        Add some idea on Ideas page
        </Typography>
    : <ul className={css.ideasList}>
      <SelectedIdeas
      getIdeasById={getIdeasById}      
      ideas={visibleIdeas} />
    </ul> }
  </Box>)
};