import { currentYear } from "../utils/Date";
import styles from "../css/footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footerMain}>
      <p className={styles.footerContent}>Copyright &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
