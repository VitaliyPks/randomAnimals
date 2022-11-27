import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Body({ children }) {
  const [backG, setBackG] = useState(
    "bg-[url('/src/images/fon.webp')] bg-cover bg-center min-w-full min-h-screen"
  );
  const path = useLocation().pathname;

  useEffect(() => {
    switch (path) {
      case "/":
        return setBackG(
          () =>
            "bg-[url('/src/images/fon.webp')] bg-center min-w-full min-h-screen"
        );
      case "/dog":
        return setBackG(
          () =>
            "bg-[url('/src/images/dogs1.jpg')] bg-repeat min-w-full min-h-screen"
        );
      case "/cat":
        return setBackG(
          () =>
            "bg-[url('/src/images/cats.jpg')] bg-center bg-cover min-w-full min-h-screen"
        );
      case "/fox":
        return setBackG(
          () =>
            "bg-[url('/src/images/foxes.jpg')] bg-repeat min-w-full min-h-screen"
        );
      case "/insults":
        return setBackG(
          () =>
            "bg-[url('/src/images/insult.jpg')] bg-cover bg-center min-w-full min-h-screen"
        );
      default:
        return path;
    }
  }, [path]);

  return <div className={backG}>{children}</div>;
}

export default Body;
