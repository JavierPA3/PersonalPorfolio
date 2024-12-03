import { useState } from 'react';
import { Window } from '../window/Window';
import './Icons.css';

export const Icons = ({ image, name, alt }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false); 

  const openWindow = () => {
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false); 
  };

  return (
    <>
      <button className="iconButton" onClick={openWindow}>
        <img src={image} alt={name} className="iconsPicture" />
        <p className="iconsP">{name}</p>
      </button>

      {isWindowOpen && <Window app={alt} onClose={closeWindow} imageWindow = {image} nameWindow = {name} />}
    </>
  );
};
