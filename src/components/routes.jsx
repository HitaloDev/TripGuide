import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "./Home/Home";
import Rooms from "./Rooms/Rooms";

const routes = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/rooms/:id" element={ <Rooms /> }/>
      </Routes>
    </BrowserRouter>

  );

}