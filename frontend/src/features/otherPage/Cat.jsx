import { useDispatch, useSelector } from 'react-redux';
import newCat from '../redux/actionCreators/catsAC';

function Cat() {
  const dispatch = useDispatch();
  const { cat } = useSelector((state) => state.catReducer);

  async function handleCatLoad() {
    const respone = await fetch('/api/cat');
    const data = await respone.json();

    dispatch(newCat(data));
  }

  return (
    <div className="bg-gray-500 items-center mt-20 m-auto border max-w-xl py-2 px-4 rounded-lg flex flex-col items-center mb-2">
      <button id='btncat' type='button' className="rounded-lg py-2 px-4 border bg-yellow-400" onClick={handleCatLoad}>Загрузить</button>
      {cat && <img className='m-5 rounded-lg' src={cat} alt="Фото котика" />}
    </div>
  );
}

export default Cat;
