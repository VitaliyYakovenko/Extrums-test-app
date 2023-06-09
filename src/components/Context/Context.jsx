import { createContext, useContext, useState, useEffect } from "react";
import { getAllTodos } from "../../rest-api/getAllTodos";

const ContextState = createContext();

export const useCustomContext = () =>{
    return useContext(ContextState)
};
// как юзать в компонентах
// import { useCustomContext } from "../Context/Context"
// const { notes } = useCustomContext();

export default function Context({ children }) {
    const [ideas, setIdeas] = useState([]);
    
    
    useEffect(() => {
        getAllTodos().then(resp => setIdeas(resp));
    }, []);
    

   return (
    <ContextState.Provider value={{ ideas:ideas, setIdeas: setIdeas }}>
     {children}       
     </ContextState.Provider>
    )
   
};