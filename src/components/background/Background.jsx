import { useEffect, useState, useRef } from 'react';
import { Downbar } from '../downbar/Downbar';
import { Start } from '../downbar/downbarStart/Start';
import { Icons } from '../icons/Icons';
import { Iconsprp } from '../icons/Iconsprp';
import './background.css';
import ReactDOM from 'react-dom';  // Add this import at the top of the file


export const Background = () => {
  const [contextualMenuExposed, setContextualMenuExposed] = useState(false);
  const [showProperties, setShowProperties] = useState(false); // Estado para mostrar propiedades
  const menuRef = useRef(null);

  useEffect(() => {
    const body = document.querySelector('body');

    const handleContextMenu = (e) => {
      e.preventDefault();
      const existingMenu = document.querySelector('.contextualMenu');

      if (contextualMenuExposed) {
        if (existingMenu) {
          existingMenu.remove();
        }
        setContextualMenuExposed(false);
      } else {
        const contextualMenu = document.createElement('div');
        const firstLi = document.createElement('p');
        const secondLi = document.createElement('p');
        const thirdLi = document.createElement('p');
        const iconsContainer = document.createElement('div');
        
        firstLi.className = 'contextualMenuLi';
        secondLi.className = 'contextualMenuLi';
        thirdLi.className = 'contextualMenuLi';
        iconsContainer.className = 'iconsContainer';

        // Text content for the menu options
        firstLi.textContent = 'Actualizar';
        secondLi.textContent = 'Copiar';
        thirdLi.textContent = 'Pegar';

        contextualMenu.appendChild(firstLi);
        contextualMenu.appendChild(document.createElement('hr'));
        contextualMenu.appendChild(secondLi);
        contextualMenu.appendChild(thirdLi);
        contextualMenu.appendChild(document.createElement('hr'));

        // Appending icons container if necessary
        const icon = <Iconsprp image={'img/Security Settings.png'} name={'Propiedades'} alt={'Properties'} />;
        ReactDOM.render(icon, iconsContainer);

        contextualMenu.appendChild(iconsContainer);

        contextualMenu.classList.add('contextualMenu');
        contextualMenu.style.position = 'absolute';
        contextualMenu.style.top = `${e.clientY}px`;
        contextualMenu.style.left = `${e.clientX}px`;

        body.appendChild(contextualMenu);
        menuRef.current = contextualMenu;
        setContextualMenuExposed(true);

        // Eventos de los elementos del menú contextual
        firstLi.addEventListener('click', () => {
          contextualMenu.remove();
          setContextualMenuExposed(false);
          window.location.reload();
        });

        // fourthLi.addEventListener('click', () => {
        //   contextualMenu.remove();
        //   setContextualMenuExposed(false);
        //   setShowProperties(true); 
        // });
      }
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        menuRef.current.remove();
        setContextualMenuExposed(false);
      }
    };

    body.addEventListener('contextmenu', handleContextMenu);
    body.addEventListener('click', handleClickOutside);

    return () => {
      body.removeEventListener('contextmenu', handleContextMenu);
      body.removeEventListener('click', handleClickOutside);
    };
  }, [contextualMenuExposed]);  

  return (
    <>
      <div className="allDivs">
        <div className="iconsContainer">
          <Icons image="img/My Computer.png" name="Mi Equipo" alt='MyComputer'/>
          <Icons image="img/Certificate.png" name="Certificados" alt="AboutMe" />
        </div>
      </div>
      <Downbar />
    </>
  );
};
