import { useEffect,useState } from "react";
import CompletedTable from "../../components/CompletedTable/CompletedTable";
import { getAllIdeas } from "../../rest-api/getAllIdeas";


export default function Completed() {
   const [ideas, setIdeas] = useState([]);

   useEffect(() => { 
      getAllIdeas().then(resp => setIdeas(resp.data));
   }, []);
  
   const completedIdeas = ideas.filter(idea => idea.done);

   return (
      <div>
      <h1>Completed challanges</h1>
      {completedIdeas.length === 0
      ?  <p>no ideas at the moment</p>
      :  <CompletedTable
      completedIdeas={completedIdeas}
      />    
      } 
     
      </div>
   )
};