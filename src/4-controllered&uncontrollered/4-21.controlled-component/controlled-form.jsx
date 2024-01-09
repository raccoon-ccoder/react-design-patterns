import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nameInputError, setNameInputError] = useState("");

  useEffect(() => {
    if (name.length < 1) {
      setNameInputError("Name can not be empty");
    } else {
      setNameInputError("");
    }
  }, [name]);

  return (
    <form>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
