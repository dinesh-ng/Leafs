import styles from "../css/input.module.css";

const Input = (props) => (
  <>
    <input
      className={styles.inputBox}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
    ></input>
  </>
);
export default Input;
