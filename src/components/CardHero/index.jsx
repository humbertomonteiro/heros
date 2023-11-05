import { useContext } from "react";
import { HerosContext } from "../../context";
import styles from "./cardhero.module.css";

export default function CardHero({ hero }) {
  const { character, character2, setCharacter, setCharacter2 } =
    useContext(HerosContext);

  return (
    <div className={styles.container}>
      <div className={styles.cardHero}>
        <div className={styles.close}>
          <strong
            onClick={
              hero === 1 ? () => setCharacter({}) : () => setCharacter2({})
            }
          >
            x
          </strong>
        </div>
        <div className={styles.header}>
          <strong>{hero === 1 ? character?.id : character2?.id}</strong>
        </div>
        <div className={styles.boxImg}>
          <img
            src={hero === 1 ? character?.images?.sm : character2?.images?.sm}
            alt={hero === 1 ? character?.name : character2?.name}
          />
        </div>
        <ul className={styles.powerStats}>
          <li>
            <span>Combate</span>
            {hero === 1
              ? character?.powerstats?.combat
              : character2?.powerstats?.combat}
          </li>
          <li>
            <span>Durabilidade</span>
            {hero === 1
              ? character?.powerstats?.durability
              : character2?.powerstats?.durability}
          </li>
          <li>
            <span>inteligente</span>
            {hero === 1
              ? character?.powerstats?.intelligence
              : character2?.powerstats?.intelligence}
          </li>
          <li>
            <span>Poder</span>
            {hero === 1
              ? character?.powerstats?.power
              : character2?.powerstats?.power}
          </li>
          <li>
            <span>Velocidade</span>
            {hero === 1
              ? character?.powerstats?.speed
              : character2?.powerstats?.speed}
          </li>
          <li>
            <span>Força</span>
            {hero === 1
              ? character?.powerstats?.strength
              : character2?.powerstats?.strength}
          </li>
        </ul>
        <div className={styles.nameHero}>
          <h2>{hero === 1 ? character?.name : character2?.name}</h2>
          {/* a<span>{hero === 1 ? powerCharcter1 : powerCharacter2}</span> */}
        </div>
      </div>
    </div>
  );
}
