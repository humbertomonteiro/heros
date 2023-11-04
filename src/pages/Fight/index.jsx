import styles from "./fight.module.css";
import ListHeros from "../../components/ListHeros";

export default function Fight() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Fight</h1>
      </div>
      <div className={styles.containerFight}>
        <ListHeros position={1} />
        <strong>x</strong>
        <ListHeros position={2} />
      </div>
    </div>
  );
}
