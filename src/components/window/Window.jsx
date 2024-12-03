import { useState } from 'react';
import './window.css';
import { AboutMe } from '../../apps/certificados/AboutMe.jsx';
import { MoreAboutMe } from '../../apps/certificados/MoreAboutMe.jsx';
import { Symblog } from '../../apps/certificados/Symblog.jsx';
import { CrudOne } from '../../apps/certificados/CrudOne.jsx';
import { PitchEventing } from '../../apps/certificados/PitchEventing.jsx';
import { Porfolio } from '../../apps/certificados/Porfolio.jsx';
import { PythonApi } from '../../apps/certificados/PythonApi.jsx';
import { Tfg } from '../../apps/certificados/Tfg.jsx';
import { Clock } from '../../apps/clockApp/Clock.jsx';
import { WeatherApp } from '../../apps/weather/WeatherApp.jsx';
import { Calculator } from '../../apps/calculadora/Calculator.jsx';
import { NoteBlock } from '../../apps/blocNotas/NoteBlock.jsx';
import { GamesFolder } from '../../apps/GamesFolder/GamesFolder.jsx';
import { MusicPlayerXP } from '../../apps/musicPlayer/MusicPlayerXp.jsx';
import { ContactsManagerXP } from '../../apps/contactManager/ContactManagerXp.jsx';
import { ToDoXP } from '../../apps/ToDo/ToDoXP.jsx';
import { PowerPointApp } from '../../apps/PowerPoint/PowerPointApp.jsx';
import { VideoPlayer } from '../../apps/videosXp/VideoPlayer.jsx';
import { TerminalApp } from '../../apps/terminal/TerminalApp.jsx';
const componentMap = {
  AboutMe,
  MoreAboutMe,
  Symblog,
  CrudOne,
  PitchEventing,
  Porfolio,
  PythonApi,
  Tfg,
  Clock,
  WeatherApp,
  TerminalApp,
  Calculator,
  NoteBlock,
  GamesFolder,
  MusicPlayerXP,
  ContactsManagerXP,
  ToDoXP,
  PowerPointApp,
  VideoPlayer,
};

export const Window = ({ app, onClose, imageWindow, nameWindow }) => {
  const SelectedComponent = componentMap[app];

  const [position, setPosition] = useState({ top: 5, left: 350 });
  const [size, setSize] = useState({ width: 1000, height: 700 }); 
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setOffset({
      x: e.clientX - position.left,
      y: e.clientY - position.top,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        top: e.clientY - offset.y,
        left: e.clientX - offset.x,
      });
    }

    if (resizing) {
      const newWidth = e.clientX - position.left;
      const newHeight = e.clientY - position.top;

      setSize({
        width: Math.max(newWidth, 350),
        height: Math.max(newHeight, 250),
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setResizing(false); 
  };

  const handleResizeStart = (e) => {
    e.preventDefault();
    setResizing(true); 
  };

  return (
    <div
      className="totalWindow"
      style={{
        top: position.top,
        left: position.left,
        width: size.width,
        height: size.height,
        position: 'absolute',
        userSelect: 'none', 
        overflow: 'hidden', 
      }}
      onMouseMove={handleMouseMove} 
      onMouseUp={handleMouseUp} 
      onMouseLeave={handleMouseUp} 
    >
      <div className="topWindow" onMouseDown={handleMouseDown}>
       <div className='topWindowIcon'>
       <img src={imageWindow} alt={nameWindow} className="newTopWindowIcon" />
       <p className="newTopWindowP">{nameWindow}</p>
       </div>
        <div className="divIconsWindows">
        
          <button className="iconButtonWindow" onClick={onClose}>
            <img src="img/Exit.png" alt="close" className="windowsIcons" />
          </button>
          <button className="iconButtonWindow">
            <img src="img/Maximize.png" alt="maximize" className="windowsIcons" />
          </button>
          <button className="iconButtonWindow">
            <img src="img/Minimize.png" alt="minimize" className="windowsIcons" />
          </button>
          
        </div>
      </div>

      <div className="windowContent">
        {SelectedComponent ? <SelectedComponent closeWindow={onClose} windowImage={imageWindow} /> : <p>Componente no encontrado</p>}
      </div>

      <div
        className="resizeHandle"
        onMouseDown={handleResizeStart} 
      />
    </div>
  );
};
