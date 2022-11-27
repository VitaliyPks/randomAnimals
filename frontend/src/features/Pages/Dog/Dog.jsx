import { useSelector } from 'react-redux';
import Contents from '../../../Components/Contents/Contents';
import { clearImage, dogLoad } from '../../redux/main.slice';

function Dog() {
  const { dog, error, loading } = useSelector((state) => state.main);
  const base = 'Dogs'
  document.title = base


  return (
    // <div className=" bg-gray-500/90 items-center mt-20 m-auto border max-w-xl py-2 px-4 rounded-lg flex flex-col items-center mb-2">
    //   <button id='btndog' type='button' onClick={handleDogLoad} className="rounded-lg py-2 px-4 border bg-yellow-400">Загрузить</button>
    //   {dog && <img className='m-5 rounded-lg' src={dog} alt="Повторите загрузку." />}
    // </div>
    <Contents 
      title={base}
      error={error}
      picture={dog}
      loading={loading}
      loadFunc={dogLoad}
      clearFunc={clearImage}
    />
  );
}

export default Dog;
