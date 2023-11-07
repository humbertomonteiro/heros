import { createContext, useEffect, useState } from "react";

// import { api } from "../server/api";

export const HerosContext = createContext({});

export default function HerosProvider({ children }) {
  const [heros, setHeros] = useState([]);
  const [character, setCharacter] = useState({});
  const [character2, setCharacter2] = useState({});
  const [powerCharacter1, setPowerCharacter1] = useState({});
  const [powerCharacter2, setPowerCharacter2] = useState({});

  useEffect(() => {
    let power1 =
      character?.powerstats?.combat +
      character?.powerstats?.durability +
      character?.powerstats?.intelligence +
      character?.powerstats?.power +
      character?.powerstats?.speed +
      character?.powerstats?.strength;

    setPowerCharacter1(power1);

    let power2 =
      character2?.powerstats?.combat +
      character2?.powerstats?.durability +
      character2?.powerstats?.intelligence +
      character2?.powerstats?.power +
      character2?.powerstats?.speed +
      character2?.powerstats?.strength;

    setPowerCharacter2(power2);
  }, [character, character2]);

  useEffect(() => {
    async function apiServer() {
      const lsData = localStorage.getItem("@heros-data");

      if (lsData !== null) {
        const dataParse = JSON.parse(lsData);

        setHeros(dataParse);
      } else {
        const URL = "http://homologacao3.azapfy.com.br/api/ps/metahumans";
        fetch(URL, {
          referrerPolicy: "unsafe-url",
        })
          .then((response) => response.json())
          .then((data) => setHeros(data));
        // try {
        //   const response = await api.get();

        //   setHeros(response.data);
        //   localStorage.setItem("@heros-data", JSON.stringify(response.data));
        // } catch (error) {
        //   // console.log(error.response.data);
        //   console.log(error.response.status);
        //   // console.log(error.response.headers);
        //   // console.log(error);
        // }
      }
    }

    apiServer();
  }, []);

  return (
    <HerosContext.Provider
      value={{
        heros,
        character,
        setCharacter,
        powerCharacter1,
        character2,
        setCharacter2,
        powerCharacter2,
      }}
    >
      {children}
    </HerosContext.Provider>
  );
}
