import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { AppBar, Box, Typography} from '@mui/material';
import css from "./Loayout.module.css";

export default function Loayout() {

    return (
        <>
        <Box  component="header">
            <AppBar component="nav">
            <Box className={css.navList}>
            <Typography               
            variant="h6"
            component="p"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}        
            >                              
            <NavLink className={css.linkHome} to="/">Home</NavLink> 
            </Typography>     
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NavLink className={css.navLink}          
            to="/ideas">Ideas</NavLink>     
            <NavLink className={css.navLink}
            to="/achievements">Achievements</NavLink>
            <NavLink className={css.navLink}
            to="/completed">Completed</NavLink>
            </Box>             
            </Box>
            
            </AppBar>
        </Box>     
        <Box component="main" sx={{ p: 12 }}>
        <Suspense fallback={<p className={css.loading}>...loading</p>}>
        <Outlet/>            
        </Suspense>
        </Box>    
           
       </>    
    )
}