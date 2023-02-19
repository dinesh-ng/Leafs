import leafData from "../utils/leafData";
import Leaf from "./Leaf";
import styles from "../css/leaves.module.css";
import leafStyles from "../css/leaf.module.css";
import { useState } from "react";
const Main = (props) => {
  const [localtime, setLocalTime] = useState(null);
  setInterval(() => {
    const date = new Date().toLocaleTimeString();

    setLocalTime(date);
  }, 1000);

  const getKey = () => new Date().toLocaleTimeString();
  const [newleaf, setNewleaf] = useState({
    id: getKey(),
    title: "New work!",
    content: "things to do...",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setNewleaf((prev) => ({
      ...prev,
      id: getKey(),
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(e.target.name);
    leafData.push(newleaf);
    setNewleaf({
      id: getKey(),
      title: "New work!",
      content: "things to do...",
    });
  };

  return (
    <>
      <div className={styles.leaves}>
        <>
          <div className={leafStyles.activeStyle}>
            <input
              className={leafStyles.leafTitle + " " + leafStyles.newLeafTitle}
              name="title"
              value={newleaf.title}
              onChange={handleChange}
            ></input>
            <textarea
              className={
                leafStyles.leafContent + " " + leafStyles.newLeafContent
              }
              name="content"
              value={newleaf.content}
              onChange={handleChange}
            ></textarea>
            <button className={leafStyles.addNewBtn} onClick={handleSubmit}>
              +
            </button>
          </div>
        </>
        {leafData.map((leaf) => (
          <Leaf
            key={leaf.id}
            title={leaf.title}
            content={leaf.content.substring(0, 60)}
          />
        ))}
      </div>
      <h1>{localtime}</h1>
    </>
  );
};
export default Main;
