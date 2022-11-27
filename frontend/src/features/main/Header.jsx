import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleBurger } from "../redux/main.slice";
import "./header.scss";

function Header() {
  const base = "Header";
  const dispatch = useDispatch()
  const { active } = useSelector( state => state.main)
  // const [active, setActive] = useState(false);

  const handleBurger = () => {
    dispatch(toggleBurger());
  };

  return (
    <nav className={base}>
      <div className={active ? `${base}_links active` : `${base}_links`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${base}_link-active` : `${base}_link`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/dog"
          className={({ isActive }) =>
            isActive ? `${base}_link-active` : `${base}_link`
          }
        >
          Dogs
        </NavLink>
        <NavLink
          to="/cat"
          className={({ isActive }) =>
            isActive ? `${base}_link-active` : `${base}_link`
          }
        >
          Cats
        </NavLink>
        <NavLink
          to="/fox"
          className={({ isActive }) =>
            isActive ? `${base}_link-active` : `${base}_link`
          }
        >
          Foxes
        </NavLink>
        <NavLink
          to="/insults"
          className={({ isActive }) =>
            isActive ? `${base}_link-active` : `${base}_link`
          }
        >
          Insults
        </NavLink>
      </div>
      <div className={`${base}_burger-container`}>
        <div
          className={active ? `${base}_burger active` : `${base}_burger`}
          onClick={handleBurger}
        >
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
