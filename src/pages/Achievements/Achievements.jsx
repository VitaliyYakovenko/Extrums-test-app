import { useEffect, useState } from "react";
import { Typography} from "@mui/material";
import { getAllSelectedIdeas} from "../../rest-api/getAllSelectedIdeas";
import  AchievementsList  from "../../components/AchievementsList/AchievementsList";


export default function Achievements() {
   const [ideas, setIdeas] = useState([]);
 
   useEffect(() => { 
      getAllSelectedIdeas().then(resp => setIdeas(resp.data));

   }, []);

   const visibleAch = ideas.filter(idea => idea.done);

   return (
      <>
      <Typography
      sx={{textAlign:"center"}}      
      component="h1"  
      variant="h3"
      mt={2}
      mb={4}>Achievements</Typography>
      <AchievementsList
      visibleAch={visibleAch} />
      </>
   );
};