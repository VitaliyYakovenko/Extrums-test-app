import { useEffect, useState } from "react";
import { getAllIdeas } from "../../rest-api/getAllIdeas";
import { updateStatusById } from "../../rest-api/updateStatusById";
import IdeasList from "../../components/IdeasList/IdeasList";
import { Typography, Button, Box } from '@mui/material';
import css from "./Ideas.module.css";

export default function Ideas() {
     const [ideas, setIdeas] = useState([]);
     const [status, setStatus] = useState("idle");
     const [page, setPage] = useState(1);
     const [total, setTotal] = useState(0);
     
     
     useEffect(() => {
          setStatus("loading")
          getAllIdeas().then(resp => {
               setIdeas([...resp.data])
               setTotal(resp.total);
               setStatus("idle")
          });
     }, []);


     useEffect(() => {
          if (page > 1) {
               setStatus("loading")
               getAllIdeas(page).then(resp => {
                    setIdeas(prev => [...prev, ...resp.data])
                    setStatus("idle")
               })
          }
     }
    , [page]);
     
      
     const getCurrentIdea = (id) => {
          updateStatusById(id)
  
          const updateIdea = ideas.map((idea) => {
               if (idea._id === id) {
              
          return { ...idea, status: "selected" };
          }
          return idea;
          });

          setIdeas(updateIdea);
     };
    
     return (<Box m={2} className={css.ideasPage}>      
          <Typography
          component="h1"     
          variant="h3"
          mt={2}
          mb={3}     
          className={css.ideasTitle}>
          Choose fresh ideas to do
          </Typography>
          <ul>
          <IdeasList
          getCurrentIdea={getCurrentIdea}
          ideas={ideas}/>    
          </ul>
    
          {total === ideas.length
          ? <></> 
          : <Button 
          variant="contained"
          onClick={() => setPage(prev => prev + 1)}>
          {status === "loading"
           ? <span className={css.loadMoreBtnText}>Loading...</span>
           : <span className={css.loadMoreBtnText}>Load More</span>            
          }          
          </Button>  
          }
          </Box>);
};