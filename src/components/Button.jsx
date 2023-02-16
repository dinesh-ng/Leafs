import styles from "../css/button.module.css";

const Button = (props) => (
  <>
    <button className={styles.buttonMain} type={props.type}>
      {props.text}
    </button>
  </>
);
export default Button;
