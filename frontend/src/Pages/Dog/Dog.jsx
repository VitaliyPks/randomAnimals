import { useSelector } from 'react-redux';
import Contents from '../../Components/Contents/Contents';
import { clearImage, dogLoad } from '../../redux/main.slice';

function Dog() {
  const { dog, error, loading } = useSelector((state) => state.main);
  const base = 'Dogs'
  document.title = base


  return (
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
