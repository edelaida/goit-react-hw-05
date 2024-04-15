//import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailsPages = lazy(() => import("./pages/MovieDetailsPages"));
const MoviesPages = lazy(() => import("./pages/MoviesPages"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

//import css from "./App.module.css";

export const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movie_id/*" element={<MovieDetailsPages />} />
          <Route path="/movies" element={<MoviesPages />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
