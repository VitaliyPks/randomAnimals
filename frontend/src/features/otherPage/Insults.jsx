import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import newInsult from '../redux/actionCreators/insultsAC';

function Insults() {
  const dispatch = useDispatch();
  const { insult } = useSelector((state) => state.insultReducer);
  document.title = 'Insults'

  async function handleInsultLoad() {
    const respone = await fetch('/api/insult');
    const data = await respone.json();

    dispatch(newInsult(data));
  }

  useEffect(() => {
    return () => {
      dispatch(newInsult(''))
    }
  }, [dispatch])

  return (
    <div className="bg-gray-500/70 items-center mt-20 m-auto border max-w-xl py-2 px-4 rounded-lg flex flex-col items-center mb-2">
      <button id='btninsults' type='button' onClick={handleInsultLoad} className="rounded-lg py-2 px-4 border bg-yellow-400">Загрузить</button>
      {insult && <h1 className='m-5 text-xl'>{insult}</h1>}
    </div>
  );
}

export default Insults;
