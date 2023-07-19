import AddContact from "./components/AddContact/AddContact";
import FilterContact from "./components/FilterContact/FilterContact";
import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import { AllContactsContext, EditingContext } from "../context/Context";
import axios from "axios";
function App() {
  const [allContacts, setAllContacts] = useState([]);
  const [editing, setEditing] = useState(false);
  // Erster Fetch aus der DB
  useEffect(() => {
    axios.get("/api/contacts").then((res) => {
      setAllContacts(res.data);
    });
  }, []);
  return (
    <>
      <EditingContext.Provider value={{ editing, setEditing }}>
        <AllContactsContext.Provider value={{ allContacts, setAllContacts }}>
          <h1>Kontaktliste</h1>
          <AddContact />
          <FilterContact />
          <ContactList />
        </AllContactsContext.Provider>
      </EditingContext.Provider>
    </>
  );
}

export default App;
