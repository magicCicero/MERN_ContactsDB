import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AllContactsContext } from "../../../context/Context";

const UpdateBtn = (props) => {
  const { allContacts, setAllContacts } = useContext(AllContactsContext);
  const [isEditing, setIsEditing] = useState(false); // Zustand für Bearbeitungsmodus
  const [name, setName] = useState(props.name);
  const [phone, setPhone] = useState(props.phone);
  const [address, setAddress] = useState(props.street);

  const updateContact = async () => {
    // Sende die aktualisierten Daten an die API, die aus den Inputfeldern stammen. Damit wird die Datenbank im Backend aktualisert
    await axios.put(`/api/contacts/${props.id}`, {
      name: name,
      telefone: phone,
      street: address,
    });

    // Filtere den geänderten Kontakt aus allen Kontakten und überschreibe die neuen Daten
    const changedContact = allContacts.map((contact) => {
      if (contact._id === props.id) {
        return {
          ...contact,
          name: name,
          telefone: phone,
          street: address,
          _id: props.id,
        };
      }
      return contact;
    });
    // Funktion wird aufgerufen und gleichzeitig der All Contacts Kontext mit den aktuellen Daten gefüllt
    setAllContacts(changedContact);
    // Beende den Bearbeitungsmodus nach dem Speichern
    setIsEditing(false);
  };

  if (isEditing) {
    // Ist der Bearbeitungsmodus aktiviert ändert sich das Aussehen der Komponente
    return (
      <>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Bitte gebe den neuen Namen ein"
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Bitte gebe die neue Telefonnummer ein"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Bitte gebe die neue Adresse ein"
        />
        <button onClick={updateContact}>Änderungen speichern</button>
      </>
    );
  } else {
    // Im Anzeigemodus, der standardgemäß geladen wird, wenn die JSX Komponente geladen wurde
    return (
      <>
        <button onClick={() => setIsEditing(true)}>Bearbeiten</button>
      </>
    );
  }
};

export default UpdateBtn;
