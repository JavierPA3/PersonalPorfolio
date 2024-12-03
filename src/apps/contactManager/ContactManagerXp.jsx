import React, { useState } from "react";
import "./contactsManagerXP.css";

export const ContactsManagerXP = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Javier Postigo Arévalo", phone: "603 40 40 45" },
    { id: 2, name: "Carlos Postigo", phone: "1 2 3 4" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const addContact = () => {
    if (newName && newPhone) {
      const newContact = {
        id: contacts.length + 1,
        name: newName,
        phone: newPhone,
      };
      setContacts([...contacts, newContact]);
      setNewName("");
      setNewPhone("");
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contactsManagerXPMain">
      <div className="contactsHeader">Contactos</div>
      <div className="contactsSearch">
        <input
          type="text"
          placeholder="Busca por el nombre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchInput"
        />
      </div>
      <div className="contactsList">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <div key={contact.id} className="contactCard">
              <div className="contactInfo">
                <span className="contactName">{contact.name}</span>
                <span className="contactPhone">{contact.phone}</span>
              </div>
              <button
                className="deleteButton"
                onClick={() => deleteContact(contact.id)}
              >
                Borrar
              </button>
            </div>
          ))
        ) : (
          <p className="noContacts">No se ha encontrado.</p>
        )}
      </div>
      <div className="contactsAddForm">
        <input
          type="text"
          placeholder="Nombre"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="addInput"
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
          className="addInput"
        />
        <button className="addButton" onClick={addContact}>
          Añadir contacto
        </button>
      </div>
    </div>
  );
};
