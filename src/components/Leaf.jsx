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
        <button
          className={styles.deleteBtn}
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          <i className="fa fa-trash"></i>
        </button>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={(e) => {
            if (e.target.checked) setleafStyle((prev) => doneStyle);
            else setleafStyle((prev) => activeStyle);
          }}
        ></input>
      </div>
    </>
  );
};
export default Leaf;
