import MovieList from "./components/MovieList";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="container">
      <button className="reset-btn rounded-lg">Reset Both</button>
      <hr />
      <MovieList />
      <hr />
      <SongList />
    </div>
  );
}

export default App;
