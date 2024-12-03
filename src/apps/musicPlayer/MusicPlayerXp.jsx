import React, { useState, useRef } from 'react';
import './musicPlayerXp.css';

export const MusicPlayerXP = () => {
  const [songs, setSongs] = useState([
    { title: "Canción 1", src: "img/img2/Pok.mp3" },
    { title: "Canción 2", src: "img/img2/Dor.mp3" },
    { title: "Canción 3", src: "img/img2/Shin.mp3" },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(false);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newSongs = files.map((file) => ({
      title: file.name,
      src: URL.createObjectURL(file),
    }));
    setSongs([...songs, ...newSongs]);
  };

  return (
    <main className="musicPlayerXPMain">
      <div className="musicPlayerHeader">Reproductor de Música XP</div>
      <div className="musicPlayerDisplay">
        <p className="songTitle">{songs[currentSongIndex]?.title || "Sin canción"}</p>
      </div>
      <audio
        ref={audioRef}
        src={songs[currentSongIndex]?.src}
        onEnded={handleNext}
      />
      <div className="musicPlayerButtons">
        <button className="xpButton" onClick={handlePrevious}>⏮</button>
        <button className="xpButton" onClick={handlePlayPause}>
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button className="xpButton" onClick={handleNext}>⏭</button>
      </div>
      <div className="musicPlayerPlaylist">
        {songs.map((song, index) => (
          <div
            key={index}
            className={`playlistItem ${
              index === currentSongIndex ? "active" : ""
            }`}
            onClick={() => {
              setCurrentSongIndex(index);
              setIsPlaying(false);
            }}
          >
            {song.title}
          </div>
        ))}
      </div>
      <div className="uploadSection">
        <input
          type="file"
          accept="audio/*"
          multiple
          onChange={handleFileUpload}
          className="fileInput"
        />
        <p>Agrega tus canciones (MP3)</p>
      </div>
    </main>
  );
};
