import React from "react";
import "./css/App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorite from "./Pages/Favorite";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
