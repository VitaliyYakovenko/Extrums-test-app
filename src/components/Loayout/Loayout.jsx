import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function Loayout() {

    return (
        <>
        <header>
            <nav>
            <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/ideas">Ideas</NavLink>
            </li>
             <li>
            <NavLink to="/achievements">Achievements</NavLink>
            </li>   
             <li>
            <NavLink to="/completed">Completed</NavLink>
            </li>   
            </ul>
            </nav>
        </header>
        <main>
        <Suspense fallback={<p>...loading</p>}>
        <Outlet/>            
        </Suspense>
        </main>    
        </>    
    )
}