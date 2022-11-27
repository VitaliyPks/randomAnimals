import { useSelector } from "react-redux";
import Contents from "../../../Components/Contents/Contents";
import { catLoad, clearImage } from "../../redux/main.slice";

function Cat() {
  const { cat, error, loading } = useSelector((state) => state.main);
  const base = "Cats";
  document.title = base;

  return (
    <Contents
      title={base}
      error={error}
      picture={cat}
      loading={loading}
      loadFunc={catLoad}
      clearFunc={clearImage}
    />
  );
}

export default Cat;
