import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { toggleBurger } from "../../redux/main.slice";
import { ReactComponent as HomeIcon } from "../../assets/images/home-icon.svg";
import { ReactComponent as CatIcon } from "../../assets/images/cat-icon.svg";
import { ReactComponent as DogIcon } from "../../assets/images/dog-icon.svg";
import { ReactComponent as FoxIcon } from "../../assets/images/fox-icon.svg";
import { ReactComponent as InsultIcon } from "../../assets/images/message-icon.svg";
import "./header.scss";
import useWindowSize from "../../Hook/useWindowSize";

function Header() {
  const base = "Header";
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { active } = useSelector((state) => state.main);
  const { windowSize } = useWindowSize();
  const [xCoor, setXCoor] = useState("0px");

  const handleBurger = () => {
    dispatch(toggleBurger());
  };

  useEffect(() => {
    const link = document.querySelectorAll(".Header_link");
    const activeLinkcoor = document.querySelector(".active");
    console.log(link, activeLinkcoor);
    if (link && activeLinkcoor) {
      const linxX = link[0].getBoundingClientRect().x;
      const activeLinkX = activeLinkcoor.getBoundingClientRect().x;
      setXCoor(`${activeLinkX - linxX}px`);
    }
  }, [pathname, windowSize]);

  return (
    <>
      {xCoor && (
        <nav className={base}>
          <div className={active ? `${base}_links active` : `${base}_links`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${base}_link active` : `${base}_link`
              }
            >
              <span className={`${base}_text`}>Home</span>
              <span className={`${base}_icon`}>
                <HomeIcon />
              </span>
            </NavLink>
            <NavLink
              to="/dog"
              className={({ isActive }) =>
                isActive ? `${base}_link active` : `${base}_link`
              }
            >
              <span className={`${base}_text`}>Dogs</span>
              <span className={`${base}_icon`}>
                <DogIcon />
              </span>
            </NavLink>
            <NavLink
              to="/cat"
              className={({ isActive }) =>
                isActive ? `${base}_link active` : `${base}_link`
              }
            >
              <span className={`${base}_text`}>Cats</span>
              <span className={`${base}_icon`}>
                <CatIcon />
              </span>
            </NavLink>
            <NavLink
              to="/fox"
              className={({ isActive }) =>
                isActive ? `${base}_link active` : `${base}_link`
              }
            >
              <span className={`${base}_text`}>Foxes</span>
              <span className={`${base}_icon`}>
                <FoxIcon />
              </span>
            </NavLink>
            <NavLink
              to="/insults"
              className={({ isActive }) =>
                isActive ? `${base}_link active` : `${base}_link`
              }
            >
              <span className={`${base}_text`}>Insults</span>
              <span className={`${base}_icon`}>
                <InsultIcon />
              </span>
            </NavLink>
            <div
              className={`${base}_indicator`}
              style={{ transform: `translateX(${xCoor})` }}
            ></div>
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
      )}
    </>
  );
}

export default Header;
