import { useState } from 'react';
import { Window } from '../window/Window';
import './foldricons.css';

export const FolderIcons = ({ image, name, alt }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false); 

  const openWindow = () => {
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false); 
  };

  return (
    <>
      <button className="FoldiconButton" onClick={openWindow}>
        <img src={image} alt={name} className="FoldiconsPicture" />
        <p className="FoldiconsP">{name}</p>
      </button>

      {isWindowOpen && <Window app={alt} onClose={closeWindow} imageWindow = {image} nameWindow = {name} />}
    </>
  );
};
