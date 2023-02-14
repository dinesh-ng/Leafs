import styles from "../css/leaf.module.css";
const Leaf = () => {
  return (
    <div className={styles.leafMain}>
      <h1 className={styles.leafTitle}>Title</h1>
      <p className={styles.leafContent}>Content</p>
    </div>
  );
};
export default Leaf;
