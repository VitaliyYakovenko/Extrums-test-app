import { useEffect, useState } from "react";
import { getAllIdeas } from "../../rest-api/getAllIdeas";
import { selectedIdeaById } from "../../rest-api/selectedIdeaById";
import IdeasList from "../../components/IdeasList/IdeasList";

export default function Ideas() {
     const [ideas, setIdeas] = useState([]);
 
     useEffect(() => {
          getAllIdeas().then(resp => setIdeas(resp));  
     }, []); 
      
     const getCurrentIdea = (id) => {
         selectedIdeaById(id).then(console.log);
         setIdeas(ideas.filter(idea => idea.id !== id));
     };

     const visibleIdeas = ideas.filter(idea => idea.status === "wait");

     return (<div>
          <h1>Choose fresh ideas to do</h1>
          {
          visibleIdeas.length === 0
          ? <p>visibleIdeas dont have any ideas</p>
          : <ul>
               <IdeasList
               ideas={visibleIdeas}
               getCurrentIdea={getCurrentIdea}
               />
          </ul>
          }
     </div>);
};