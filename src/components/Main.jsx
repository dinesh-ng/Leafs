import leafData from "../utils/leafData";
import Leaf from "./Leaf";
import styles from "../css/leaves.module.css";
import { useState } from "react";
const Main = (props) => {
  const [localtime, setLocalTime] = useState(null);
  setInterval(() => {
    const date = new Date().toLocaleTimeString();
    // console.log(date);
    setLocalTime(date);
  }, 1000);
  return (
    <>
      <div className={styles.leaves}>
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
