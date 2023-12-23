import React from "react";

export default function SongList() {
  // Get list of Songs
  const songs = [];
  return (
    <div>
      {" "}
      <div className="song-list-wrapper">
        <div className="song-list">
          <h2>Song List</h2>
          <button>+Add song</button>
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
