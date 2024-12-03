import { useState } from "react";
import "./gamesfolder.css";

export const GamesFolder = () => {
  const [currentGame, setCurrentGame] = useState("menu");

  // Juegos definidos como componentes
  const ButtonGame = () => {
    const [position, setPosition] = useState({ top: 50, left: 50 });
    const moveButton = () => {
      setPosition({
        top: Math.random() * 80 + "%",
        left: Math.random() * 80 + "%",
      });
    };
    return (
      <div className="gameContainer">
        <h2>¡Haz clic si puedes!</h2>
        <button
          style={{ top: position.top, left: position.left }}
          className="runawayButton"
          onMouseEnter={moveButton}
        >
          Atrápame
        </button>
      </div>
    );
  };

  const ClickGame = () => {
    const [score, setScore] = useState(0);
    return (
      <div className="gameContainer">
        <h2>Haz clic rápido</h2>
        <button onClick={() => setScore((prev) => prev + 1)} className="gameButton">
          Clic
        </button>
        <p>Puntaje: {score}</p>
      </div>
    );
  };

  const CounterGame = () => {
    const [count, setCount] = useState(0);
    return (
      <div className="gameContainer">
        <h2>Contador</h2>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)} className="gameButton">+1</button>
        <button onClick={() => setCount(count - 1)} className="gameButton">-1</button>
      </div>
    );
  };

  const GuessGame = () => {
    const [number, setNumber] = useState(Math.floor(Math.random() * 10) + 1);
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const handleGuess = () => {
      const guessNum = parseInt(guess);
      if (guessNum === number) {
        setMessage("¡Correcto!");
        setNumber(Math.floor(Math.random() * 10) + 1);
      } else {
        setMessage(guessNum > number ? "Muy alto" : "Muy bajo");
      }
      setGuess("");
    };
    return (
      <div className="gameContainer">
        <h2>Adivina el número</h2>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="gameInput"
        />
        <button onClick={handleGuess} className="gameButton">Adivinar</button>
        <p>{message}</p>
      </div>
    );
  };

  const ReactionGame = () => {
    const [started, setStarted] = useState(false);
    const [time, setTime] = useState(null);
    const [startTime, setStartTime] = useState(null);

    const startGame = () => {
      setStarted(true);
      setStartTime(Date.now());
    };

    const endGame = () => {
      setTime(Date.now() - startTime);
      setStarted(false);
    };

    return (
      <div className="gameContainer">
        <h2>Tiempo de reacción</h2>
        {!started ? (
          <button onClick={startGame} className="gameButton">Empezar</button>
        ) : (
          <button onClick={endGame} className="gameButton">Detener</button>
        )}
        {time && <p>Tiempo: {time}ms</p>}
      </div>
    );
  };

  const CardGame = () => {
    const [cards, setCards] = useState([
      "🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨",
      "🂩", "🂪", "🂫", "🂭", "🂮"
    ]);
    const [drawn, setDrawn] = useState([]);
    const drawCard = () => {
      if (cards.length) {
        const card = cards[Math.floor(Math.random() * cards.length)];
        setDrawn([...drawn, card]);
        setCards(cards.filter((c) => c !== card));
      }
    };
    return (
      <div className="gameContainer">
        <h2>Juego de Cartas</h2>
        <div className="cardDeck">
          {drawn.map((card, index) => (
            <div key={index} className="card">{card}</div>
          ))}
        </div>
        <button onClick={drawCard} className="gameButton">Sacar Carta</button>
        <p>Cartas restantes: {cards.length}</p>
      </div>
    );
  };

  const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
      if (!board[index] && !winner) {
        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
      }
    };

    return (
      <div className="gameContainer">
        <h2>Tic-Tac-Toe</h2>
        <div className="ticTacToeBoard">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="ticTacToeCell"
            >
              {cell}
            </button>
          ))}
        </div>
        {winner && <p>{winner} ganó el juego</p>}
      </div>
    );
  };

  const MemoryGame = () => {
    const cards = ["🐶", "🐱", "🐭", "🦊", "🐻", "🐼"];
    const shuffledCards = [...cards, ...cards].sort(() => Math.random() - 0.5);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const handleFlip = (index) => {
      if (flipped.length === 1) {
        const match = shuffledCards[flipped[0]] === shuffledCards[index];
        setMatched(match ? [...matched, index, flipped[0]] : matched);
        setTimeout(() => setFlipped([]), 1000);
      } else {
        setFlipped([index]);
      }
    };
    return (
      <div className="gameContainer">
        <h2>Juego de Memoria</h2>
        <div className="memoryBoard">
          {shuffledCards.map((card, index) => (
            <button
              key={index}
              onClick={() => handleFlip(index)}
              className={`memoryCard ${
                flipped.includes(index) || matched.includes(index) ? "flipped" : ""
              }`}
            >
              {flipped.includes(index) || matched.includes(index) ? card : "?"}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const games = [
    { key: "buttonGame", name: "Atrapa el botón", component: ButtonGame },
    { key: "clickGame", name: "Clic rápido", component: ClickGame },
    { key: "counterGame", name: "Contador", component: CounterGame },
    { key: "guessGame", name: "Adivina el número", component: GuessGame },
    { key: "reactionGame", name: "Tiempo de reacción", component: ReactionGame },
    { key: "cardGame", name: "Juego de Cartas", component: CardGame },
    { key: "ticTacToe", name: "Tic-Tac-Toe", component: TicTacToe },
    { key: "memoryGame", name: "Juego de Memoria", component: MemoryGame },
    // Añade más juegos aquí hasta llegar a 15
  ];

  return (
    <div className="xpGamesApp">
      {currentGame === "menu" && (
        <div className="menuContainer">
          <h1>Juegos Windows XP</h1>
          <div className="menuList">
            {games.map((game) => (
              <button
                key={game.key}
                onClick={() => setCurrentGame(game.key)}
                className="menuItem"
              >
                {game.name}
              </button>
            ))}
          </div>
        </div>
      )}
      {games.map((game) =>
        currentGame === game.key ? (
          <game.component key={game.key} />
        ) : null
      )}
      <button onClick={() => setCurrentGame("menu")} className="backButton">
        Volver al Menú
      </button>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
