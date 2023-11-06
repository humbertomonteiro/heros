import styles from "./cards.module.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import { useContext, useState } from "react";
import { HerosContext } from "../../context";

import ModalHero from "../../components/Modal";

import { GiRelicBlade } from "react-icons/gi";

export default function Cards() {
  const { heros } = useContext(HerosContext);

  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(19);
  const [beforePage, setBeforePage] = useState(0);

  const [open, setOpen] = useState(false);
  const [hero, setHero] = useState({});

  function handleNextPage() {
    setFilter("");
    setPage(page + 19);
    setBeforePage(beforePage + 19);
  }

  function handleBeforePage() {
    setFilter("");
    setPage(page - 19);
    setBeforePage(beforePage - 19);
  }

  const handleOpen = (item) => {
    setOpen(true);
    setHero(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Lista de Hérois</h1>

        <input
          className={styles.input}
          placeholder="Procurar personagem"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className={styles.boxes}>
        {heros
          .filter((item) => {
            if (filter !== "") {
              return item;
            }

            return item.id <= page && item.id > beforePage;
          })
          .filter((item) => {
            let text = item.name;

            let textUpper = text.toUpperCase();

            return textUpper.includes(filter.toUpperCase());
          })
          .map((item) => (
            <Card
              key={item.id}
              className={styles.box}
              onClick={() => handleOpen(item)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.images.lg}
                  alt="green iguana"
                />
                <CardContent className={styles.boxContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    <GiRelicBlade />
                    {item.powerstats.combat +
                      item.powerstats.durability +
                      item.powerstats.intelligence +
                      item.powerstats.power +
                      item.powerstats.speed +
                      item.powerstats.strength}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </div>

      <div className={styles.buttons}>
        {beforePage > 0 && (
          <Button
            className={styles.button}
            variant="contained"
            onClick={handleBeforePage}
          >
            Página anterior
          </Button>
        )}
        {page + 18 < heros.length && (
          <Button
            className={styles.button}
            variant="contained"
            onClick={handleNextPage}
          >
            Proxíma página
          </Button>
        )}
      </div>

      <ModalHero open={open} handleClose={handleClose} hero={hero} />
    </div>
  );
}
