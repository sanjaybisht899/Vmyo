import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Components/Home";
import Restaurant from "../Components/Restaurant";
import Add from "../Components/Add";
import Update from "../Components/Update";
function Router() {
  return <div>
    <Routes>
        <Route exact path='/' element={<Home/>}> </Route>
        <Route exact path='/restaurant' element={<Restaurant/>}> </Route>
        <Route exact path='/add' element={<Add/>}> </Route>
        <Route exact path='/update/*' element={<Update/>}> </Route>
    </Routes>
  </div>;
}

export default Router;
