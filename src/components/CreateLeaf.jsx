import { useState } from "react";
import leafStyles from "../css/leaf.module.css";
import leafData from "../utils/leafData";

const CreateLeaf = (props) => {
  const getKey = () => new Date().toLocaleTimeString();
  const [newleaf, setNewleaf] = useState({
    id: getKey(),
    title: "New work!",
    content: "things to do...",
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    setNewleaf((prev) => ({
      ...prev,
      id: getKey(),
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    // console.log(e.target.name);
    leafData.push(newleaf);
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
