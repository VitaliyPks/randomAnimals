import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeBurger } from "../../features/redux/main.slice";
import Loader from "../Loader/Loader";
import "./contents.scss";

function Contents({
  clearFunc,
  loadFunc,
  loading,
  picture,
  error,
  title,
  text,
}) {
  const dispatch = useDispatch();
  const base = "Contents";
  document.title = title;

  const handleLoad = () => {
    dispatch(loadFunc());
  };

  const handleError = (e) => {
    e.target.alt = "Ошибка, повторите загрузку!";
  };

  useEffect(() => {
    dispatch(closeBurger())

    return () => {
      dispatch(clearFunc());
    };
  }, [dispatch]);

  return (
    <div className={base}>
      <button type="button" className={`${base}_button`} onClick={handleLoad}>
        Нажми меня
      </button>
      {picture ? (
        <div className={`${base}_content`}>
          <img
            // style={{ opacity: "1" }}
            className={`${base}_picture`}
            src={picture}
            alt="Изображение"
            onError={handleError}
          />
        </div>
      ) : loading ? (
        <Loader />
      ) : text ? (
        <div className={`${base}_content`}>
          <h1 className={`${base}_text`}>{text}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default Contents;
