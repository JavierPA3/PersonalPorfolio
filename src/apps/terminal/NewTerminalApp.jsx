import React, { useState } from 'react';
import './terminal.css';

export const NewTerminalApp = () => {
  const [output, setOutput] = useState([]); 
  const [inputValue, setInputValue] = useState(''); // Almacena el texto actual del input

  const handleCommand = (command) => {
    let newOutput = [...output];
    
    switch (command.toLowerCase()) {
      case '/help':
        newOutput.push(
          'Comandos disponibles:\n/help - Muestra los comandos disponibles\n/info - Información general sobre mí\n/time - Muestra la hora actual\n/date - Muestra la fecha actual\n/hobby - Mi hobby favorito\n/stack - Mis tecnologías favoritas\n/contact - Cómo contactarme\n/joke - Cuenta un chiste\n/weather - Clima ficticio de ejemplo\n/about - Sobre esta aplicación'
        );
        break;
      case '/info':
        newOutput.push('Soy un terminal interactivo hecho en React. Pregúntame cosas interesantes.');
        break;
      case '/time':
        newOutput.push(`La hora actual es: ${new Date().toLocaleTimeString()}`);
        break;
      case '/date':
        newOutput.push(`La fecha actual es: ${new Date().toLocaleDateString()}`);
        break;
      case '/hobby':
        newOutput.push('Me encanta aprender cosas nuevas, especialmente sobre tecnología.');
        break;
      case '/stack':
        newOutput.push('Mis tecnologías favoritas incluyen JavaScript, React y Node.js.');
        break;
      case '/contact':
        newOutput.push('Puedes contactarme a través de mi correo ficticio: example@domain.com');
        break;
      case '/joke':
        newOutput.push('¿Por qué los programadores prefieren el lado oscuro? Porque usan "0" y "1".');
        break;
      case '/weather':
        newOutput.push('El clima de ejemplo es: Soleado con 25ºC.');
        break;
      case '/about':
        newOutput.push('Esta aplicación de terminal es un proyecto educativo hecho en React.');
        break;
      default:
        newOutput.push(
          `Comando no reconocido: "${command}". Escribe /help para ver la lista de comandos.`
        );
        break;
    }

    setOutput(newOutput); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setOutput([...output, `PS C:/Users/Administrator> ${inputValue}`]); 
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
