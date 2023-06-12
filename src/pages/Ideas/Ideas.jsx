import { useEffect, useState } from "react";
import { getAllIdeas } from "../../rest-api/getAllIdeas";
import { updateStatusById } from "../../rest-api/updateStatusById";
import IdeasList from "../../components/IdeasList/IdeasList";

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

     console.log(page);
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
          setIdeas(ideas.filter(idea => idea._id !== id));
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
          {total === ideas.length 
          ? <></> 
          : <button onClick={() => setPage(prev => prev + 1)}>
          {status === "loading"
           ? <span>Loading...</span>
           : <span>Load More</span>            
          }          
          </button>  
          }
     </div>);
};