import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import newDog from '../redux/actionCreators/dogsAC';

function Dog() {
  const dispatch = useDispatch();
  const { dog } = useSelector((state) => state.dogReducer);

  async function handleDogLoad() {
    const respone = await fetch('/api/dog');
    const data = await respone.json();

    dispatch(newDog(data));
  }

  useEffect(() => {
    return () => {
      dispatch(newDog(''))
    }
  }, [dispatch])

  return (
    <div className=" bg-gray-500/90 items-center mt-20 m-auto border max-w-xl py-2 px-4 rounded-lg flex flex-col items-center mb-2">
      <button id='btndog' type='button' onClick={handleDogLoad} className="rounded-lg py-2 px-4 border bg-yellow-400">Загрузить</button>
      {dog && <img className='m-5 rounded-lg' src={dog} alt="Повторите загрузку." />}
    </div>
  );
}

export default Dog;
