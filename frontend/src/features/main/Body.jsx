import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Body({ children }) {
  const path = useLocation().pathname;
  const [backG, setBackG] = useState("bg-[url('/public/img/fon.png')] bg-cover bg-center min-w-full min-h-screen");

  useEffect(() => {
    switch (path) {
      case '/':
        return setBackG(() => "bg-[url('/public/img/fon.png')] bg-cover bg-center min-w-full min-h-screen");
      case '/dog':
        return setBackG(() => "bg-[url('/public/img/dogs.jpg')] bg-repeat min-w-full min-h-screen");
      case '/cat':
        return setBackG(() => "bg-[url('/public/img/cats.jpg')] bg-repeat min-w-full min-h-screen");
      case '/fox':
        return setBackG(() => "bg-[url('/public/img/foxes.jpg')] bg-repeat min-w-full min-h-screen");
      case '/insults':
        return setBackG(() => "bg-[url('/public/img/insult.jpg')] bg-cover bg-center min-w-full min-h-screen");
      default:
        return path;
    }
  }, [path]);

  return (
    <div className={backG}>
      {children}
    </div >
  );
}

export default Body;
