import { useContext, useRef, useState } from "react";
import { HerosContext } from "../../context";
import styles from "./listHeros.module.css";

import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { BiSearch } from "react-icons/bi";

import CardHero from "../CardHero";

export default function ListHeros({ position }) {
  const { heros, setCharacter, character, character2, setCharacter2 } =
    useContext(HerosContext);

  const filterHero = useRef(null);
  const [filter, setFilter] = useState("");

  function selectCharacter(position, item) {
    if (position === 1) {
      setCharacter(item);
    } else {
      setCharacter2(item);
    }
  }

  function formFilter(event) {
    event.preventDefault();

    setFilter(filterHero?.current?.value);
  }

  return (
    <div className={styles.listHeros}>
      <form onSubmit={formFilter}>
        <input
          type="text"
          placeholder="Escolhar o primeiro personagem"
          ref={filterHero}
        />
        <button>
          <BiSearch />
        </button>
      </form>
      <List
        className={styles.list}
        sx={{
          width: "100%",
          bgcolor: "background.dark",
          position: "relative",
          overflow: "auto",
          "& ul": { padding: 0 },
        }}
      >
        {
          <>
            {heros
              .filter((item) => {
                let text = item.name;

                let textUpper = text.toUpperCase();

                return textUpper.includes(filter.toUpperCase());
              })
              .map((item) => (
                <ListItem key={item.id}>
                  <ListItemButton
                    onClick={() => selectCharacter(position, item)}
                  >
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
