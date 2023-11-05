import { Box, Modal } from "@mui/material";

import { useContext, useState } from "react";
import { HerosContext } from "../../context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  maxWidth: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalWinner({ open, setOpen, winner }) {
  const { character, character2 } = useContext(HerosContext);

  function handleClose() {
    setOpen(false);
  }

  // function handleOpen() {
  //   setOpen(false);
  // }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <h1>Vencedor</h1>
        <img src={winner?.images?.md} alt={winner.name} />
        <h2>{winner?.name}</h2>
      </Box>
    </Modal>
  );
}
