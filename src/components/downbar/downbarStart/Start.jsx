import './start.css';
import { IconsDown } from '../iconsDownBar/IconsDown';
export const Start = () => {
  return (
    <>
     <main className="downbarStart">
  <div className="startTitle">
    <img src="img/Moon.jpg" className="whistlerImg" alt="Profile" />
    <span>Administrator</span>
  </div>
    <hr className='startTitleGradient'/>
  <div className="startContent">
    <div className='leftStartContent'>
      <IconsDown image="img/clock.png" name="Clock" alt="Clock" />
      <IconsDown image="img/cloudSun.png" name="Weather" alt="WeatherApp"/>
      <IconsDown image="img/Notepad.png" name="Notas" alt='NoteBlock'/>
      <IconsDown image="img/Game Controller.png" name="Juegos" alt='GamesFolder'/>
      <IconsDown image="img/Attributes.png" name="Todo" alt='ToDoXP'/>
      <IconsDown image="img/WMP Device Error.png" name="XpMusic" alt='MusicPlayerXP'/>

          </div>
    <div className='rightStartContent'>
      <IconsDown image="img/Command Prompt.png" name="terminalApp"  alt='TerminalApp'/>
      <IconsDown image="img/Input Panel.png" name="Calculadora" alt='Calculator'/>
      <IconsDown image="img/OE Reply All.png" name="Contactos" alt='ContactsManagerXP'/>
      <IconsDown image="img/Windows Media Player Skin.png" name="Reproductor" alt='VideoPlayer'/>
      <IconsDown image="img/Windows Media Encoder.png" name="PowerPoint" alt='PowerPointApp'/>

    </div>
  </div>
  <div className="startFooter">
  <div className="divStartFooter">
    <img src="img/Standby.png" className="divStartFooterImg" alt="Standby" />
    <span>Cerrar sesión</span>
  </div>
  <div className="divStartFooter">
    <img src="img/Power.png" className="divStartFooterImg" alt="Power" />
    <span>Apagar</span>
  </div>
</div>

</main>

    </>
  );
};
