//import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailsPages = lazy(() => import("./pages/MovieDetailsPages"));
const MoviesPages = lazy(() => import("./pages/MoviesPages"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

import css from "./App.module.css";

export const App = () => {
  const linkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <h1>goit-react-hw-05</h1>
      <nav className={css.kino}>
        <NavLink to="/" className={linkClass}>
          Home Page
        </NavLink>
        <NavLink to="/details" className={linkClass}>
          Movie Details Pages
        </NavLink>
        <NavLink to="/movies" className={linkClass}>
          Movies Pages
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<MovieDetailsPages />} />
          <Route path="/movies" element={<MoviesPages />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
