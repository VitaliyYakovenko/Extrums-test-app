import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import CompletedTable from "../../components/CompletedTable/CompletedTable";
import { getAllSelectedIdeas} from "../../rest-api/getAllSelectedIdeas";

export default function Completed() {
   const [ideas, setIdeas] = useState([]);

   useEffect(() => { 
      getAllSelectedIdeas().then(resp => setIdeas(resp.data));
   }, []);
  
   const completedIdeas = ideas.filter(idea => idea.done);

   return (
      <>
      <Typography
      component="h1"  
      variant="h3"
      mt={2}
      mb={3}>Completed challanges</Typography>
      {completedIdeas.length === 0
      ?  <p>no ideas at the moment</p>
      :  <CompletedTable
      completedIdeas={completedIdeas}
      />    
      } 
     
      </>
   )
};