import styles from "./fight.module.css";
import ListHeros from "../../components/ListHeros";

import { useState, useContext } from "react";
import { HerosContext } from "../../context";

import { Button } from "@mui/material";

import ModalWinner from "../../components/ModalWinner";

export default function Fight() {
  const { character, character2, powerCharacter1, powerCharacter2 } =
    useContext(HerosContext);

  const [open, setOpen] = useState(false);
  const [winner, setWinner] = useState({});

  function Batlle() {
    if (character?.id !== undefined && character2?.id !== undefined) {
      if (powerCharacter1 > powerCharacter2) {
        setWinner(character);
      } else {
        setWinner(character2);
      }

      setOpen(true);
    } else {
      alert("Escolha os personagens antes de Batalhar");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerFight}>
        <ListHeros position={1} />
        <ListHeros position={2} />
      </div>
      <div className={styles.buttonBox}>
        <Button className={styles.button} variant="contained" onClick={Batlle}>
          BATALHAR
        </Button>
      </div>
      <ModalWinner open={open} setOpen={setOpen} winner={winner} />
    </div>
  );
}
