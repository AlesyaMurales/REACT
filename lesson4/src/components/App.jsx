import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NoteFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Chats from '../pages/Chats';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='chats' element={<Chats />} />
        <Route path='*' element={<NoteFound />} />
      </Routes>
    </>
  );
};

export default App;