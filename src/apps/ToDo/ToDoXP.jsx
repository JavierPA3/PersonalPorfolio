import { useState } from "react";
import "./ToDoXP.css";

export const ToDoXP = () => {
  const [lists, setLists] = useState([
    { title: "To Do", cards: [] },
    { title: "In Progress", cards: [] },
    { title: "Done", cards: [] },
  ]);

  const [newCardText, setNewCardText] = useState("");

  const addCard = (listIndex) => {
    if (newCardText.trim() !== "") {
      const updatedLists = [...lists];
      updatedLists[listIndex].cards.push(newCardText);
      setLists(updatedLists);
      setNewCardText("");
    }
  };

  const moveCard = (fromListIndex, toListIndex, cardIndex) => {
    const updatedLists = [...lists];
    const [movedCard] = updatedLists[fromListIndex].cards.splice(cardIndex, 1);
    updatedLists[toListIndex].cards.push(movedCard);
    setLists(updatedLists);
  };

  const deleteCard = (listIndex, cardIndex) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].cards.splice(cardIndex, 1);
    setLists(updatedLists);
  };

  return (
    <div className="trelloXPMain">
      <div className="trelloXPHeader">Trello XP</div>
      <div className="trelloXPBoard">
        {lists.map((list, listIndex) => (
          <div className="trelloXPList" key={listIndex}>
            <div className="trelloXPListTitle">{list.title}</div>
            <div className="trelloXPListCards">
              {list.cards.map((card, cardIndex) => (
                <div className="trelloXPCard" key={cardIndex}>
                  <span>{card}</span>
                  <div className="trelloXPCardActions">
                    {listIndex > 0 && (
                      <button
                        onClick={() =>
                          moveCard(listIndex, listIndex - 1, cardIndex)
                        }
                        className="moveButton"
                      >
                        &lt;
                      </button>
                    )}
                    {listIndex < lists.length - 1 && (
                      <button
                        onClick={() =>
                          moveCard(listIndex, listIndex + 1, cardIndex)
                        }
                        className="moveButton"
                      >
                        &gt;
                      </button>
                    )}
                    <button
                      onClick={() => deleteCard(listIndex, cardIndex)}
                      className="deleteButton"
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="trelloXPAddCard">
              <input
                type="text"
                value={newCardText}
                onChange={(e) => setNewCardText(e.target.value)}
                className="trelloXPInput"
                placeholder="New card..."
              />
              <button
                onClick={() => addCard(listIndex)}
                className="trelloXPButton"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

