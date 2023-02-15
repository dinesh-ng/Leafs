import styles from "../css/leaf.module.css";
const Leaf = (props) => {
  return (
    <>
      <div className={styles.leafMain}>
        <h3 className={styles.leafTitle}>{props.title}</h3>
        <p className={styles.leafContent}>{props.content}</p>
      </div>
    </>
  );
};
export default Leaf;
