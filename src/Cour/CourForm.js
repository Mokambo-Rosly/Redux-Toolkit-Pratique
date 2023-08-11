import { useState } from "react";
import { addCour } from "../redux";
import { useDispatch } from "react-redux";

const CourForm = (props) => {
  const dispatch = useDispatch()

  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCour(text))
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter un cour"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default CourForm;
