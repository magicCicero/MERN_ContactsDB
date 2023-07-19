import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AllContactsContext } from "../../../context/Context";

const UpdateBtn = (props) => {
  const { allContacts, setAllContacts } = useContext(AllContactsContext);
  const [isEditing, setIsEditing] = useState(false); // Zustand für Bearbeitungsmodus
  const [name, setName] = useState(props.name); // Zustand für den Namen
  const [phone, setPhone] = useState(props.phone); // Zustand für die Telefonnummer
  const [address, setAddress] = useState(props.street); // Zustand für die Adresse

  const updateContact = async () => {
    // Sende die aktualisierten Daten an die API
    await axios.put(`/api/contacts/${props.id}`, {
      name: name,
      phone: phone,
      street: address,
    });

    // Aktualisiere den Zustand aller Kontakte

    const newContacts = allContacts.map((contact) => {
      if (contact.id === props.id) {
        return {
          ...contact,
          name: name,
          phone: phone,
          street: address,
        };
      }
      return contact;
    });
    setAllContacts(newContacts);
    setIsEditing(false); // Beende den Bearbeitungsmodus nach dem Speichern
  };

  if (isEditing) {
    // Im Bearbeitungsmodus
    return (
      <>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={updateContact}>Speichern</button>
      </>
    );
  } else {
    // Im Anzeigemodus
    return (
      <>
        <button onClick={() => setIsEditing(true)}>Bearbeiten</button>
      </>
    );
  }
};

export default UpdateBtn;
