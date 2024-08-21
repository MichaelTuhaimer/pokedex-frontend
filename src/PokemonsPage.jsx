import axios from "axios";
import { useState, useEffect } from "react";
import { PokemonsIndex } from "./PokemonsIndex";

export function PokemonsPage() {
  const [pokemons, setPokemons] = useState({});

  const handleIndex = () => {
    axios.get("/pokemons.json").then((response) => {
      console.log(response);
      setPokemons(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <PokemonsIndex pokemons={pokemons} />
    </main>
  );
}
