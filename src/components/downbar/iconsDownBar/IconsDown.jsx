import { useState } from 'react';
import { Window } from '../../window/Window';
import './iconsdown.css';

export const IconsDown = ({ image, name, alt }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false); 

  const openWindow = () => {
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false); 
  };

  return (
    <>
      <button className="iconButtonDown" onClick={openWindow}>
        <img src={image} alt={name} className="iconsPictureDown" />
        <p className="iconsPDown">{name}</p>
      </button>

      {isWindowOpen && <Window app={alt} onClose={closeWindow} imageWindow = {image} nameWindow = {name} />}
    </>
  );
};
