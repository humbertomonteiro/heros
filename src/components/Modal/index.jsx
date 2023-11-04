import styles from "./modal.module.css";

import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  maxWidth: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalHero({ open, handleClose, hero }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <div className={styles.boxModal}>
            <img src={hero?.images?.sm} alt={hero.name} />
            <div className={styles.textModal}>
              <h2 id="parent-modal-title">{hero.name}</h2>
              <ul>
                <li>
                  <Typography variant="subtitle1">
                    Combate: {hero?.powerstats?.combat}
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1">
                    Durabilidade: {hero?.powerstats?.durability}
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1">
                    Inteligencia: {hero?.powerstats?.intelligence}
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1">
                    Poder: {hero?.powerstats?.power}
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1">
                    Velocidade: {hero?.powerstats?.speed}
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1">
                    Força: {hero?.powerstats?.strength}
                  </Typography>
                </li>
              </ul>
            </div>
          </div>

          <Button
            className={styles.buttonModal}
            variant="contained"
            onClick={handleClose}
          >
            Fechar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
