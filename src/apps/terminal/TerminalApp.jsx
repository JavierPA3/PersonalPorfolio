import React, { useState } from 'react';
import './terminal.css';

export const TerminalApp = () => {
  const [output, setOutput] = useState([]); // Almacena la salida de la terminal
  const [inputValue, setInputValue] = useState(''); // Almacena el texto actual del input

  // Función para manejar los comandos
  const handleCommand = (command) => {
    let newOutput = [...output];
    
    switch (command.toLowerCase()) {
      case '/help':
        newOutput.push(
          'Comandos disponibles:\n/help - Muestra los comandos disponibles\n/info - Información general sobre mí\n/time - Muestra la hora actual\n/date - Muestra la fecha actual\n/hobby - Mi hobby favorito\n/stack - Mis tecnologías favoritas\n/contact - Cómo contactarme\n/joke - Cuenta un chiste\n/job - Mi situación laboral\n/about - Sobre esta aplicación'
        );
        break;
      case '/info':
        newOutput.push('Soy Javier Postigo Arévalo, desarrollador web.');
        break;
      case '/time':
        newOutput.push(`La hora actual es: ${new Date().toLocaleTimeString()}`);
        break;
      case '/date':
        newOutput.push(`La fecha actual es: ${new Date().toLocaleDateString()}`);
        break;
      case '/hobby':
        newOutput.push('Adoro entre muchas cosas, programar, estudiar idiomas y jugar al fútbol.');
        break;
      case '/stack':
        newOutput.push('Mi lenguaje favorito es php, aunque el porfolio este hecho en React.');
        break;
      case '/contact':
        newOutput.push('Puedes contactarme a través de mi correo eléctronico: javier.postigo.arevalo@gmail.com');
        break;
      case '/joke':
        newOutput.push('¿Por qué los programadores prefieren el lado oscuro? Porque usan "0" y "1".');
        break;
      case '/job':
        newOutput.push('Ahora mismo me encuentro desempleado, si desea contactar conmigo para cualquier trabajo, no dude en escribirme.');
        break;
      case '/about':
        newOutput.push('Este porfolio esta hecho en Vite React.');
        break;
      default:
        newOutput.push(
          `Comando no reconocido: "${command}". Escribe /help para ver la lista de comandos.`
        );
        break;
    }

    setOutput(newOutput); // Actualiza la salida
  };

  // Manejador del envío del input
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setOutput([...output, `PS C:/Users/Administrator> ${inputValue}`]); // Agrega el comando ejecutado
      handleCommand(inputValue); // Procesa el comando
      setInputValue(''); // Limpia el input
    }
  };

  return (
    <main className="terminalAppMain">
      <div className="terminalOutput">
        {output.map((line, index) => (
          <p key={index} className="outputText">{line}</p>
        ))}
      </div>
      <form className="inputBar" onSubmit={handleSubmit}>
        <span className="inputText">PS C:/Users/Administrator&gt; </span>
        <input
          type="text"
          className="terminalInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un comando..."
          autoFocus
        />
      </form>
    </main>
  );
};
