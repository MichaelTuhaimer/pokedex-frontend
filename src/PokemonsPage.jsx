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
  const [version, setVersion] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    const handleIndex = () => {
      let params = new URL(document.location.toString()).searchParams;
      let versionName = params.get("version");
      setVersion(versionName);
      axios.get(`/pokemons.json?page_number=${page}`).then((response) => {
        console.log(response.data);
        setPokemons(response.data);
      });
    };

    handleIndex();
  }, [page]);

  const handleShow = (pokemon) => {
    let params = new URL(document.location.toString()).searchParams;
    let versionName = params.get("version");
    setVersion(versionName);
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

  return (
    <main className="bg-blue-300">
      <Header />
      <PokemonsIndex pokemons={pokemons} version={version} onShow={handleShow} page={setPage} />
      <Modal show={isPokemonsShowVisible} onClose={handleClose}>
        <PokemonsShow pokemon={currentPokemon} version={version}></PokemonsShow>
      </Modal>
    </main>
  );
}
