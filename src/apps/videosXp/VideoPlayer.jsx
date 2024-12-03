// src/VideoPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import './videos.css'; // Estilos

export const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoSrc, setVideoSrc] = useState('/img/img2/videoplayback.mp4'); // Ruta del video preexistente
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  // Función para manejar el estado de reproducción y pausa
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Función para manejar el silencio (mute)
  const handleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  // Función para actualizar el tiempo del video
  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  // Función para cargar metadatos del video (como su duración)
  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  // Función para cambiar el tiempo de reproducción (seek)
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Función para ajustar el volumen
  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value / 100;
  };

  // Función para poner el video en pantalla completa
  const handleFullScreen = () => {
    if (playerRef.current.requestFullscreen) {
      playerRef.current.requestFullscreen();
    } else if (playerRef.current.mozRequestFullScreen) { // Firefox
      playerRef.current.mozRequestFullScreen();
    } else if (playerRef.current.webkitRequestFullscreen) { // Chrome, Safari
      playerRef.current.webkitRequestFullscreen();
    } else if (playerRef.current.msRequestFullscreen) { // IE/Edge
      playerRef.current.msRequestFullscreen();
    }
  };

  // Función para manejar la subida de un nuevo archivo
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'video/mp4') {
      setVideoSrc(URL.createObjectURL(file)); // Actualizar el src del video
      setIsPlaying(true); // Iniciar la reproducción cuando el archivo es cargado
    } else {
      alert('Por favor, selecciona un archivo MP4.');
    }
  };

  return (
    <div className="VideoPlayer" ref={playerRef}>
      <div className="VideoPlayer-header">
        <h1 className="VideoPlayer-title">Reproductor de Video Estilo Windows XP</h1>
      </div>
      <div className="VideoPlayer-container">
        {/* Contenedor del video */}
        <div className="VideoPlayer-video-container">
          <video
            ref={videoRef}
            className="VideoPlayer-video"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            width="640"
            controls={false} // Desactivar los controles predeterminados
            src={videoSrc}
          >
            Tu navegador no soporta el formato de video.
          </video>
        </div>

        <div className="VideoPlayer-controls">
          <button className="VideoPlayer-btn" onClick={handlePlayPause}>
            {isPlaying ? 'Pausar' : 'Reproducir'}
          </button>
          <button className="VideoPlayer-btn" onClick={() => videoRef.current.currentTime = 0}>
            Detener
          </button>

          <div className="VideoPlayer-progress-container">
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100}
              onChange={handleSeek}
              className="VideoPlayer-progress-bar"
            />
          </div>

          <div className="VideoPlayer-volume-container">
            <button className="VideoPlayer-btn" onClick={handleMute}>
              {isMuted ? 'Desactivar sonido' : 'Silenciar'}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              onChange={handleVolumeChange}
              className="VideoPlayer-volume-slider"
            />
          </div>

          <button className="VideoPlayer-btn" onClick={handleFullScreen}>
            Pantalla Completa
          </button>
        </div>

        {/* Subir archivo de video */}
        <div className="VideoPlayer-upload">
          <input
            type="file"
            accept="video/mp4"
            onChange={handleFileUpload}
            className="VideoPlayer-file-input"
          />
          <label className="VideoPlayer-upload-label">Subir archivo MP4</label>
        </div>
      </div>
    </div>
  );
};
