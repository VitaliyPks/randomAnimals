import { useSelector } from 'react-redux';
import { clearImage, insultLoad } from '../../redux/main.slice';
import Contents from '../../Components/Contents/Contents';


function Insults() {
  const { insult, error, loading } = useSelector((state) => state.main);
  const base = 'Insults'
  document.title = base

  return (
    <Contents
      title={base}
      error={error}
      text={insult}
      loading={loading}
      loadFunc={insultLoad}
      clearFunc={clearImage}
    />
  );
}

export default Insults;
