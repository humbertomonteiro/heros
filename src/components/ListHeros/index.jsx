import { useContext, useState } from "react";
import { HerosContext } from "../../context";

import {
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function ListHeros({ position }) {
  const { heros, setCharacter, setCharacter2 } = useContext(HerosContext);

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <input type="text" placeholder="Escolhar o primeiro personagem" />
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
      >
        {
          <div>
            <ListSubheader>Lista de personagens</ListSubheader>
            {heros.map((item) => (
              <ListItem>
                <ListItemButton
                  onClick={
                    position === 1 ? setCharacter(item) : setCharacter2(item)
                  }
                >
                  <ListItemText primary={item.name} />
                  <img src={item.images.xs} alt={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </div>
        }
      </List>
    </div>
  );
}
