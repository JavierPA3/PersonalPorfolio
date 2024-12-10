import './properties.css';
import { useState } from 'react';

export const Properties = () => {
  const [previewImage, setPreviewImage] = useState(null); // Imagen para la previsualización

  const handlePreview = (src) => {
    setPreviewImage(src); // Actualizar la imagen de previsualización
  };

  const handleImageChange = () => {
    if (previewImage) {
      document.body.style.backgroundImage = `url(${previewImage})`; // Cambiar el fondo de escritorio
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
    }
  };

  const imageOptions = [
    'img/1.jpg',
    'img/bck.jpg',
    'img/bck2.jpg',
    'img/bck3.jpg',
    'img/bck4.jpg',
  ];

  return (
    <main className="propertiesMainPage">
      <h2 className="propertiesTitle">Propiedades</h2>
      <div className="propertiesSection">
        <div className="monitorContainer">
          <img
            src="https://xp.quenq.com/images/xp/crt_monitor.png"
            alt="Monitor"
            className="monitorImage"
          />
          {previewImage && (
            <div
              className="monitorPreview"
              style={{
                backgroundImage: `url(${previewImage})`,
              }}
            ></div>
          )}
        </div>

        <div className="imageSelectorProperties">
          {imageOptions.map((src, index) => (
            <div
              key={index}
              className="imageOption"
              onClick={() => handlePreview(src)}
            >
              <img
                src={src}
                alt={`Imagen ${index + 1}`}
                className="imageThumbnail"
              />
              <span>Imagen {index + 1}</span>
            </div>
          ))}
        </div>
        <button
          className="applyButton"
          onClick={handleImageChange}
          disabled={!previewImage}
        >
          Aplicar Fondo
        </button>
      </div>
    </main>
  );
};
