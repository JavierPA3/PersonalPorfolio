import { Downbar } from '../downbar/Downbar';
import { Start } from '../downbar/downbarStart/Start';
import { Icons } from '../icons/Icons';
import './background.css';

export const Background = () => {
  return (
    <>
      <div className="allDivs">
        <div className="iconsContainer">
          <Icons image="img/My Computer.png" name="Mi Equipo" />
          <Icons image="img/Certificate.png" name="Certificados" alt="AboutMe" />
          <Icons image="img/Internet Connection Wizard.png" name="Navegador" />
          
        </div>
      </div>
      <Downbar />
    </>
  );
};
