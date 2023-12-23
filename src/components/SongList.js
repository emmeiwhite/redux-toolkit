import { createRandomSong } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../store"; // This is our action creator

export default function SongList() {
  const dispatch = useDispatch();
  // Get list of Songs
  //   const songs = [];
  const songs = useSelector((state) => {
    return state.songs;
  });

  const handleSongAdd = (song) => {
    // Here we'll use our action creator
    const action = addSong(song); // This goes as the payload!
    console.log(action);
    dispatch(action);
  };
  return (
    <div>
      {" "}
      <div className="song-list-wrapper">
        <div className="song-list">
          <h2>Song List</h2>
          <button onClick={() => handleSongAdd(createRandomSong())}>
            +Add song
          </button>
        </div>

        {/* Show the song List Below */}
        {songs.map((song) => (
          <div className="song-detail">
            <p>{`song Name`}</p>
            <button>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
