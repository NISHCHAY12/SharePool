import Addr from "./components/rides/addrides";
import Home from "./components/home/home";
import Ride from "./components/rides/ridelist";
import NoPage from "./components/404";
import Reg from "./components/log-reg/register";
import Log from "./components/log-reg/login";
import Prof from "./components/log-reg/profile";
import Lay from "./lay";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lay />}>
            <Route index element={<Home />} />
            <Route path="addr" element={<Addr />} />
            <Route path="/ride" element={<Ride />} />
            <Route path="/reg" element={<Reg />} />
            <Route path="/log" element={<Log />} />
            <Route path="/prof" element={<Prof />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
