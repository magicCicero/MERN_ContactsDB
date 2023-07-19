import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AllContactsContext } from "../../../context/Context";

const AddContact = () => {
  const { allContacts, setAllContacts } = useContext(AllContactsContext);
  // Input States für die Speicherung der Eingaben
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [street, setStreet] = useState("");

  // Async Funktion für die Speicherung des neuen Kontakts, ohne die Speicherung der Eingaben in einer Variable, da die Funktion asynchron ist und der Wert der Variable NICHT sofort verfügbar ist
  const addNewContact = async () => {
    await axios
      .post("/api/contacts", {
        name: name,
        telefone: tel,
        street: street,
      })
      // Erst nach dem POST an die DB wird der Context AllContacts aktualisiert und mit der Response.data erweitert
      .then((response) => {
        setAllContacts([...allContacts, response.data]);
      });
  };

  return (
    <>
      <button onClick={addNewContact}>Kontakt hinzufügen</button>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Straße"
        onChange={(e) => setStreet(e.target.value)}
        value={street}
      />
      <input
        type="text"
        placeholder="Tel"
        onChange={(e) => setTel(e.target.value)}
        value={tel}
      />
    </>
  );
};

export default AddContact;
