import MovieList from "./components/MovieList";
import SongList from "./components/SongList";
import { useDispatch } from "react-redux";
import { reset, resetSongs } from "./store";

function App() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
    dispatch(resetSongs());
  };
  // useSelector((state) => {

  // })
  return (
    <div className="container">
      <button
        className="reset-btn rounded-lg"
        onClick={handleReset}
      >
        Reset Both
      </button>
      <hr />
      <MovieList />
      <hr />
      <SongList />
    </div>
  );
}

export default App;
