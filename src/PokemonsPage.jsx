import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { PokemonsIndex } from "./PokemonsIndex";
import { PokemonsShow } from "./PokemonsShow";
import { Modal } from "./Modal";

export function PokemonsPage() {
  const [pokemons, setPokemons] = useState([]);
  const [isPokemonsShowVisible, setIsPokemonsShowVisible] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});

  const handleIndex = () => {
    axios.get("/pokemons.json").then((response) => {
      console.log(response.data);
      setPokemons(response.data);
    });
  };

  const handleShow = (pokemon) => {
    axios.get(`/pokemons/${pokemon.id}.json`).then((response) => {
      console.log("handleShow", response.data);
      setIsPokemonsShowVisible(true);
      setCurrentPokemon(response.data);
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPokemonsShowVisible(false);
  };

  useEffect(handleIndex, []);

  return (
    <main className="bg-blue-300">
      <Header />
      <PokemonsIndex pokemons={pokemons} onShow={handleShow} />
      <Modal show={isPokemonsShowVisible} onClose={handleClose}>
        <PokemonsShow pokemon={currentPokemon}></PokemonsShow>
      </Modal>
    </main>
  );
}
