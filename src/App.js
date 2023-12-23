import "./App.css";
import MovieList from "./components/MovieList";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="app">
      <button>Reset Both</button>
      <MovieList />
      <SongList />
    </div>
  );
}

export default App;
