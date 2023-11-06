import styles from "./modalWinner.module.css";
import { Box, Modal, Button } from "@mui/material";

import { useContext } from "react";
import { HerosContext } from "../../context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalWinner({ open, setOpen, winner }) {
  const { setCharacter, setCharacter2 } = useContext(HerosContext);

  function handleNewBattle() {
    setCharacter({});
    setCharacter2({});
    setOpen(false);
  }

  return (
    <Modal
      open={open}
      onClose={handleNewBattle}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }} className={styles.modal}>
        <h1>Vencedor</h1>
        <img src={winner?.images?.md} alt={winner.name} />
        <h2>{winner?.name}</h2>
        <Button onClick={handleNewBattle} variant="contained">
          Voltar
        </Button>
      </Box>
    </Modal>
  );
}
