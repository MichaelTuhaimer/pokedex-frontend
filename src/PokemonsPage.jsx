import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { PokemonsIndex } from "./PokemonsIndex";
import { PokemonsShow } from "./PokemonsShow";
import { Modal } from "./Modal";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";
import { SignupPage } from "./SignupPage";

export function PokemonsPage() {
  const [pokemons, setPokemons] = useState([]);
  const [isPokemonsShowVisible, setIsPokemonsShowVisible] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [version, setVersion] = useState("");
  const [page, setPage] = useState(0);
  const jwt = localStorage.getItem("jwt");

  // const { currentPage, setCurrentPage } = useState("");

  useEffect(() => {
    const handleIndex = () => {
      let params = new URL(document.location.toString()).searchParams;
      let versionName = params.get("version");
      setVersion(versionName);
      // params.get("page")
      // setCurrentPage(pageNumber);
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
      <div className="grid grid-cols-2 bg-red-500 text-slate-200">
        {!jwt && <LoginPage />}
        {!jwt && <SignupPage />}
      </div>
      <div className="text-slate-200 bg-red-500">{jwt && <LogoutLink />}</div>
      <PokemonsIndex pokemons={pokemons} version={version} onShow={handleShow} setPage={setPage} page={page} />
      <Modal show={isPokemonsShowVisible} onClose={handleClose}>
        <PokemonsShow pokemon={currentPokemon} version={version}></PokemonsShow>
      </Modal>
    </main>
  );
}
