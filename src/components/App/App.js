import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Loayout from "../Loayout/Loayout";
import Home from "../../pages/Home/Home";
const Ideas = lazy(() => import("../../pages/Ideas/Ideas"));
const Achievements = lazy(() => import("../../pages/Achievements/Achievements"));
const Completed = lazy(() => import("../../pages/Completed/Completed"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));


export default function App() {


  return (

    <Routes>
        <Route path="/" element={<Loayout/>}>
          <Route index element={<Home />}/>
          <Route path="ideas" element={<Ideas />}/>
          <Route path="achievements" element={<Achievements />}/>
          <Route path="completed" element={<Completed />} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>

  );
}


