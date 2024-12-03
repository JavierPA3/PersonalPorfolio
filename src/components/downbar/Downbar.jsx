import { useState } from 'react';
import './Downbar.css';
import { Start } from './downbarStart/Start';
import ReactDOM from 'react-dom';

export const Downbar = () => {
    const [toggleStartButton, setToggleStartButton] = useState(false); // Controla el estado del menú inicio

    // Cambia el estado al hacer clic en el botón
    const openStartMenu = () => {
        setToggleStartButton((prevState) => !prevState);
    };

    return (
        <>
            <div className="barra">
                {/* Botón para abrir el menú inicio */}
                <button className="iconButton2" onClick={openStartMenu}>
                    <img src="./img/2.png" alt="logo" className="logo" />
                </button>

                <div className="rightCorner">
                    <img src="./img/taskbar_resize.png" alt="logo" className="taskBar" />

                    <button className="iconButton2">
                        <img src="./img/Volume.png" alt="Volume" className="imagesCornerLogo" />
                    </button>

                    <button className="iconButton2">
                        <img src="./img/Bluetooth Devices.png" alt="Bluetooth" className="imagesCornerLogo" />
                    </button>

                    <button className="iconButton2">
                        <img src="./img/Disable Network Connection.png" alt="Network" className="imagesCornerLogo" />
                    </button>

                    <img src="./img/taskbar_resize.png" alt="Resize" className="taskBar" />

                    <button className="iconButton2">
                        <img src="./img/Setup Language.png" alt="Language" className="imagesCornerLogo" />
                    </button>
                </div>
            </div>

            {toggleStartButton &&
                ReactDOM.createPortal(
                    <div className="startMenuContainer">
                        <Start closeMenu={() => setToggleStartButton(false)} />
                    </div>,
                    document.body 
                )}
        </>
    );
};
