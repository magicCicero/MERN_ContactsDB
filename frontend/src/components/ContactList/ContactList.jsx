import ContactItem from "../ContactItem/ContactItem";
import axios from "axios";
import { useContext } from "react";
import { AllContactsContext } from "../../../context/Context";

const ContactList = () => {
  const { allContacts, setAllContacts } = useContext(AllContactsContext);
  // Anzeige aller Kontakte.

  return (
    <>
      <h1>Kontakte</h1>
      <div className="contact-list-container">
        <ContactItem />
      </div>
    </>
  );
};

export default ContactList;
