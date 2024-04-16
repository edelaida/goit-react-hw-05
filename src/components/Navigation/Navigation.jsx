import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const linkClass = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <div>
      <nav className={css.kino}>
        <NavLink to="/" className={linkClass}>
          Home Page
        </NavLink>
        <NavLink to="/movies" className={linkClass}>
          Movies Pages
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
