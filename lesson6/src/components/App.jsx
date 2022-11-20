import React from "react";
import { Routes, Route } from "react-router-dom";
import Messages from './Messages';
import Chats from './Chats';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Chats />} />
      <Route path='/message/:id' element={<Messages />} />
    </Routes>
  );
};
export default App;