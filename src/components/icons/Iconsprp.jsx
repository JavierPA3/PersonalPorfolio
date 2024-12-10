import { useState } from 'react';
import { Window } from '../window/Window';
import './iconprops.css';

export const Iconsprp = ({ image, name, alt }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false); 

  const openWindow = () => {
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false); 
  };

  return (
    <>
      <button className="iconButtonPrp" onClick={openWindow}>
        <img src={image} alt={name} className="iconsPicturePrp" />
        <p className="iconsPPrp">{name}</p>
      </button>

      {isWindowOpen && <Window app={alt} onClose={closeWindow} imageWindow = {image} nameWindow = {name} />}
    </>
  );
};
