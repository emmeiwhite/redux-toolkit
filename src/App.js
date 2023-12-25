import MovieList from "./components/MovieList";
import SongList from "./components/SongList";
import { useDispatch } from "react-redux";
import { reset } from "./store";

function App() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
    // dispatch(resetSongs());
    // Instead of calling both the dispatches twice we'll instead use the inbuild extraReducers and buider
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
