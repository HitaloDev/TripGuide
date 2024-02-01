import React from 'react';
import Home from './components/Home/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rooms from './components/Rooms/Rooms.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/:id" element={<Rooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
