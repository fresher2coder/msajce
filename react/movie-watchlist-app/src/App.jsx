import React, { useState } from "react";
import MovieList from "./components/MovieList.jsx";
import MovieStats from "./components/MovieStats";
import "./App.css";

const initialMovies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", watched: false },
  { id: 2, title: "Titanic", genre: "Romance", watched: true },
  { id: 3, title: "Avengers", genre: "Action", watched: false },
];

const App = () => {
  return (
    <div className="app-container">
      <h1 className="main-title fade-in">My Movie Watchlist</h1>

      <MovieStats movies1={initialMovies} />
      <MovieList movies1={initialMovies} />
    </div>
  );
};

export default App;
