import { useSelector } from 'react-redux';
import Contents from '../../Components/Contents/Contents';
import { clearImage, foxLoad } from '../../redux/main.slice';

function Fox() {
  const { fox, error, loading  } = useSelector((state) => state.main);
  const base = 'Foxes'
  document.title = base

  return (
    <Contents
      title={base}
      error={error}
      picture={fox}
      loading={loading}
      loadFunc={foxLoad}
      clearFunc={clearImage}
    />
  );
}

export default Fox;
