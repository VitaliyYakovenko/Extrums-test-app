import { useEffect, useState } from "react";
import { getAllIdeas } from "../../rest-api/getAllIdeas";
import  AchievementsList  from "../../components/AchievementsList/AchievementsList";


export default function Achievements() {
   const [ideas, setIdeas] = useState([]);
 
   useEffect(() => { 
      getAllIdeas().then(resp => setIdeas(resp));

   }, []);

   const visibleAch = ideas.filter(idea => idea.done);

   return (
      <>
      <h1>Achievements</h1>
      <AchievementsList
      visibleAch={visibleAch} />
      </>
   );
};