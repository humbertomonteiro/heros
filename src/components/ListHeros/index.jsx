import { useContext } from "react";
import { HerosContext } from "../../context";
import styles from "./listHeros.module.css";

import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import CardHero from "../CardHero";

export default function ListHeros({ position }) {
  const {
    heros,
    setCharacter,
    character,
    powerCharacter1,
    character2,
    powerCharacter2,
    setCharacter2,
  } = useContext(HerosContext);

  function selectCharacter(position, item) {
    if (position === 1) {
      setCharacter(item);
    } else {
      setCharacter2(item);
    }
  }

  return (
    <div className={styles.listHeros}>
      <input type="text" placeholder="Escolhar o primeiro personagem" />
      <List
        className={styles.list}
        sx={{
          width: "100%",
          bgcolor: "background.dark",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
      >
        {
          <>
            {heros.map((item) => (
              <ListItem>
                <ListItemButton onClick={() => selectCharacter(position, item)}>
                  <ListItemText primary={item.name} />
                  <img src={item.images.xs} alt={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </>
        }
      </List>
      {position === 1 && character.id && <CardHero hero={1} />}
      {position === 2 && character2.id && <CardHero hero={2} />}
      {/* {position === 1 ? <CardHero hero={1} /> : <CardHero hero={2} />} */}
    </div>
  );
}
