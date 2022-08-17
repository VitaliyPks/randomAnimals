import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import newFox from '../redux/actionCreators/foxesAC';

function Fox() {
  const dispatch = useDispatch();
  const { fox } = useSelector((state) => state.foxReducer);

  async function handleFoxLoad() {
    const respone = await fetch('/api/fox');
    const data = await respone.json();

    dispatch(newFox(data));
  }

  useEffect(() => {
    return () => {
      dispatch(newFox(''))
    }
  }, [dispatch])

  return (
    <div className="bg-gray-500/90 items-center mt-20 m-auto border max-w-xl py-2 px-4 rounded-lg flex flex-col items-center mb-2">
      <button id='btnfox' type='button' onClick={handleFoxLoad} className="rounded-lg py-2 px-4 border bg-yellow-400">Загрузить</button>
      {fox && <img className='m-5 rounded-lg' src={fox} alt="Повторите загрузку." />}
    </div>
  );
}

export default Fox;
