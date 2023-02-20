import { useState } from "react";
import Leaf from "./Leaf";
import CreateLeaf from "./CreateLeaf";
import styles from "../css/landingPage.module.css";
import leafData from "../utils/leafData";

const Main = (props) => {
  const [localtime, setLocalTime] = useState(null);
  setInterval(() => {
    const date = new Date().toLocaleTimeString();

    setLocalTime(date);
  }, 1000);

  const handleDelete = (id) => {
    console.log(id);
    // leafData = leafData.filter((leaf, idx) => {
    //   return id !== idx;
    // });
  };
  return (
    <>
      <div className={styles.leaves}>
        <CreateLeaf />
        {leafData.map((leaf) => (
          <Leaf
            key={leaf.id}
            title={leaf.title}
            content={leaf.content.substring(0, 60)}
            onDelete={() => {
              handleDelete(leaf.id);
            }}
          />
        ))}
      </div>
      <h1>{localtime}</h1>
    </>
  );
};
export default Main;
