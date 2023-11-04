import { createContext, useEffect, useState } from "react";

import api from "../api/server";

export const HerosContext = createContext({});

export default function HerosProvider({ children }) {
  const [heros, setHeros] = useState([]);
  const [character, setCharacter] = useState({});
  const [character2, setCharacter2] = useState({});

  useEffect(() => {
    async function apiServer() {
      try {
        const response = await api.get();
        setHeros(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    apiServer();
  });

  return (
    <HerosContext.Provider
      value={{
        heros,
        character,
        setCharacter,
        character2,
        setCharacter2,
      }}
    >
      {children}
    </HerosContext.Provider>
  );
}
