import { useState } from "react";
import styles from "../css/leaf.module.css";
const activeStyle = styles.activeStyle;
const doneStyle = styles.doneStyle;
const Leaf = (props) => {
  const [leafStyle, setleafStyle] = useState(activeStyle);
  const handleChange = (e) => {
    if (e.target.checked) {
      setleafStyle(doneStyle);
    } else setleafStyle(activeStyle);
  };
  return (
    <>
      <div className={leafStyle}>
        <h2 className={styles.leafTitle}>{props.title}</h2>
        <p className={styles.leafContent}>{props.content}</p>
        <input
          className={styles.checkBox}
          type="checkbox"
          // onChange={handleChange}
          onChange={props.onDelete}
        ></input>
      </div>
    </>
  );
};
export default Leaf;
