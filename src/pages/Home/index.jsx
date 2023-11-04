import styles from "./home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link className={styles.box} to="/cards">
        <h2>
          Hérois <span>incríveis</span>
        </h2>
        <img src={require("../../assets/imgs/ironman-2.jpeg")} alt="iron-man" />
      </Link>
      <Link className={styles.box} to="/fight">
        <img src={require("../../assets/imgs/hulk-2.jpeg")} alt="hulk" />
        <h2>
          Super <span>Duelos</span>
        </h2>
      </Link>
    </div>
  );
}
