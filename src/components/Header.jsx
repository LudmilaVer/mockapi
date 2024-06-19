import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

function Header() {
    return (
     <header className={styles.Header}>
        <img src={logo} alt="MECK Logo" />
        <nav className={styles.HeaderNav}>
            <a href="#">Главная</a>
            <a href="#">Музыка</a>
            <a href="#">Сообщества</a>
            <a href="#">Друзья</a>
        </nav>
     </header>
    );
  }
  
  export default Header;
  