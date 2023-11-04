import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Heros
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/fight">Fight</Link>
        {/* <Link to="/cards">Cards</Link> */}
      </nav>
    </header>
  );
}
