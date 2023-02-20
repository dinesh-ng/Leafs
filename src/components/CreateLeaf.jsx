import { useState } from "react";
import leafStyles from "../css/leaf.module.css";

const CreateLeaf = (props) => {
  const getKey = () => new Date().toLocaleTimeString();
  const [newleaf, setNewleaf] = useState({
    id: getKey(),
    title: "New work!",
    content: "things to do...",
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    setNewleaf((prev) => ({
      ...prev,
      id: getKey(),
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    props.addLeaf(newleaf);

    setNewleaf({
      id: getKey(),
      title: "New work!",
      content: "things to do...",
    });
  };

  return (
    <>
      <div className={leafStyles.activeStyle}>
        <input
          className={leafStyles.leafTitle + " " + leafStyles.newLeafTitle}
          name="title"
          value={newleaf.title}
          onChange={handleChange}
        ></input>
        <textarea
          className={leafStyles.leafContent + " " + leafStyles.newLeafContent}
          name="content"
          value={newleaf.content}
          onChange={handleChange}
        ></textarea>
        <button className={leafStyles.addNewBtn} onClick={handleSubmit}>
          +
        </button>
      </div>
    </>
  );
};

export default CreateLeaf;
