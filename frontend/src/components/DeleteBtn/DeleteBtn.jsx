import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AllContactsContext } from "../../../context/Context";
const DeleteBtn = (props) => {
  const { allContacts, setAllContacts } = useContext(AllContactsContext);
  // Asynchrone Funktion für die Löschung einzelner Kontakte. Die Props enthält die entsprechende ID, die dem einzelnen Delete Button zugewiesen wird
  const deleteContact = async () => {
    await axios.delete(`/api/contacts/${props.id}`);
    // Alle Kontakte aus AllContacts werden gefiltert und nach der jeweiligen ID gesucht. Anschließend wird der Kontakt gelöscht
    setAllContacts(allContacts.filter((contact) => contact._id !== props.id));
  };

  return (
    <>
      <button onClick={deleteContact}>Kontakt löschen</button>
    </>
  );
};

export default DeleteBtn;
