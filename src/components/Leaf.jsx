import styles from "../css/leaf.module.css";
const Leaf = (props) => {
  return (
    <>
      <div className={styles.leafMain}>
        <h2 className={styles.leafTitle}>{props.title}</h2>
        <p className={styles.leafContent}>{props.content}</p>
      </div>
    </>
  );
};
export default Leaf;
