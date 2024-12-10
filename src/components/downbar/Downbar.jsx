import { useState } from 'react';
import './Downbar.css';
import { Start } from './downbarStart/Start';
import ReactDOM from 'react-dom';

export const Downbar = () => {
    const [toggleStartButton, setToggleStartButton] = useState(false); 

    const openStartMenu = () => {
        setToggleStartButton((prevState) => !prevState);
    };

    return (
        <>
            <div className="barra">
                <button className="iconButton2" onClick={openStartMenu}>
                    <img src="./img/2.png" alt="logo" className="logo" />
                </button>

                <div className="rightCorner">

                    <button className="iconButton2">
                        <img src="./img/Volume.png" alt="Volume" className="imagesCornerLogo" />
                    </button>

                    <button className="iconButton2">
                        <img src="./img/Bluetooth Devices.png" alt="Bluetooth" className="imagesCornerLogo" />
                    </button>

                    <button className="iconButton2">
                        <img src="./img/Disable Network Connection.png" alt="Network" className="imagesCornerLogo" />
                    </button>


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
