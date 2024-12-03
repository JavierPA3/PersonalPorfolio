// src/PowerPointApp.js
import React, { useState } from 'react';
import PptxGenJS from 'pptxgenjs';
import './ppx.css';  // Estilos

export const PowerPointApp = () => {
  const [title, setTitle] = useState('Presentación de Windows XP');
  const [subtitle, setSubtitle] = useState('¡Bienvenidos a la presentación estilo Windows XP!');
  const [slides, setSlides] = useState([]);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [bgColor, setBgColor] = useState('#FFFFFF');  // Color de fondo por defecto

  // Función para crear una diapositiva
  const addSlide = (type) => {
    const newSlide = {
      type,
      title: '',
      content: '',
      image: null,
      fontFamily,
      bgColor,
    };
    setSlides([...slides, newSlide]);
  };

  // Función para actualizar los contenidos de una diapositiva
  const updateSlide = (index, key, value) => {
    const updatedSlides = [...slides];
    updatedSlides[index][key] = value;
    setSlides(updatedSlides);
  };

  // Función para generar el PowerPoint
  const createPresentation = () => {
    const pptx = new PptxGenJS();

    slides.forEach((slide) => {
      let pptSlide = pptx.addSlide();
      pptSlide.background = { color: slide.bgColor }; // Aplicar el color de fondo

      if (slide.type === 'title') {
        pptSlide.addText(slide.title, {
          x: 1, y: 1, w: '80%', fontFace: slide.fontFamily, fontSize: 36, color: 'darkblue', bold: true, align: 'center'
        });
        pptSlide.addText(slide.content, {
          x: 1, y: 2, w: '80%', fontFace: slide.fontFamily, fontSize: 24, color: 'darkgray', align: 'center'
        });
      } else if (slide.type === 'content') {
        pptSlide.addText(slide.title, {
          x: 1, y: 1, w: '80%', fontFace: slide.fontFamily, fontSize: 32, color: 'black', bold: true, align: 'center'
        });
        pptSlide.addText(slide.content, {
          x: 1, y: 2, w: '80%', fontFace: slide.fontFamily, fontSize: 24, color: 'black', align: 'center'
        });
        if (slide.image) {
          pptSlide.addImage({ path: slide.image, x: 1, y: 3, w: 3, h: 3 });
        }
      }
    });

    pptx.writeFile({ fileName: 'Presentacion_Windows_XP.pptx' });
  };

  return (
    <div className="PowerPointApp">
      <header className="PowerPointApp-header">
        <h1 className="PowerPointApp-title">¡Creador de PowerPoints Estilo Windows XP!</h1>
        <div className="PowerPointApp-input-container">
          <input
            className="PowerPointApp-input"
            type="text"
            placeholder="Título de la presentación"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="PowerPointApp-input"
            type="text"
            placeholder="Subtítulo"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        {/* Selector de tipo de letra */}
        <div className="PowerPointApp-font-container">
          <label>Selecciona el tipo de letra: </label>
          <select 
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="PowerPointApp-select"
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
        </div>

        {/* Selector de color de fondo */}
        <div className="PowerPointApp-bgcolor-container">
          <label>Selecciona el color de fondo: </label>
          <input 
            type="color" 
            value={bgColor} 
            onChange={(e) => setBgColor(e.target.value)} 
            className="PowerPointApp-color-picker"
          />
        </div>

        {/* Mostrar diapositivas y permitir edición */}
        <div className="PowerPointApp-slides">
          {slides.map((slide, index) => (
            <div key={index} className="PowerPointApp-slide">
              <h3>Diapositiva {index + 1} ({slide.type})</h3>
              <input
                type="text"
                placeholder="Título"
                value={slide.title}
                onChange={(e) => updateSlide(index, 'title', e.target.value)}
              />
              <textarea
                placeholder="Contenido"
                value={slide.content}
                onChange={(e) => updateSlide(index, 'content', e.target.value)}
              />
              {slide.type === 'content' && (
                <input
                  type="file"
                  onChange={(e) => updateSlide(index, 'image', URL.createObjectURL(e.target.files[0]))}
                />
              )}
            </div>
          ))}
        </div>

        {/* Botones para agregar diapositivas */}
        <button className="PowerPointApp-button" onClick={() => addSlide('title')}>
          Agregar Diapositiva de Título
        </button>
        <button className="PowerPointApp-button" onClick={() => addSlide('content')}>
          Agregar Diapositiva de Contenido
        </button>

        {/* Botón para crear PowerPoint */}
        <button className="PowerPointApp-button" onClick={createPresentation}>
          Crear PowerPoint
        </button>
      </header>
    </div>
  );
};
