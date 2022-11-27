import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeBurger } from "../../redux/main.slice";
import "./home.scss";

export default function Home() {
  const base = "Home";
  const dispatch = useDispatch()
  document.title = "Random animals";

  useEffect(() => {
    dispatch(closeBurger())
  },[])

  return (
    <div className={base}>
      <h1 className={`${base}_text`}>
        Добро пожаловать на наш сайт.
        <br />
        <br />
        Здесь Вы можете посмотреть на случайную подборку различных животных и не
        только...
      </h1>
    </div>
  );
}
