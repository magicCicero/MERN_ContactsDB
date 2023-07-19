import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AllContactsContext, EditingContext } from "../../../context/Context";

const UpdateBtn = (props) => {
  const { allContacts, setAllContacts } = useContext(AllContactsContext);
  const { editing, setEditing } = useContext(EditingContext);

  const updateContact = async () => {
    await axios.put(`/api/contacts/${props.id}`);
  };
  return (
    <>
      <button onClick={() => setEditing(true)}>Update Kontakt</button>
    </>
  );
};

export default UpdateBtn;
