import { AllContactsContext } from "../../../context/Context";
import { useContext, useEffect, useState } from "react";

const FilterContact = () => {
  const { allContacts, setAllContacts } = useContext(AllContactsContext);
  const [input, setInput] = useState("");

  return (
    <>
      <h1>Filter</h1>
      <input type="text" />
    </>
  );
};

export default FilterContact;
