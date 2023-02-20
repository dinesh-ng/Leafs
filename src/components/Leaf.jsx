import { useState } from "react";
import styles from "../css/leaf.module.css";
const activeStyle = styles.activeStyle;
const doneStyle = styles.doneStyle;
const Leaf = (props) => {
  const [leafStyle, setleafStyle] = useState(activeStyle);
  return (
    <>
      <div className={leafStyle}>
        <h2 className={styles.leafTitle}>{props.title}</h2>
        <p className={styles.leafContent}>{props.content}</p>
        <input
          className={styles.checkBox}
          type="checkbox"
          onChange={() => {
            props.onDelete(props.id);
          }}
        ></input>
      </div>
    </>
  );
};
export default Leaf;
