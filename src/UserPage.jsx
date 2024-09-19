import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PokemonsShow } from "./PokemonsShow";

export function UserPage() {
  const jwt = localStorage.getItem("jwt");
  const [currentUser, setCurrentUser] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [version, setVersion] = useState("");
  const [page, setPage] = useState(-1);
  const [isPokemonsShowVisible, setIsPokemonsShowVisible] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});

  if (jwt) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }

  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  const handleUser = () => {
    axios.get("/users.json").then((response) => {
      console.log(response.data);
      setCurrentUser(response.data);
    });
  };

  const handleFavorite = () => {
    axios.get("/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

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

  useEffect(() => {
    const handleIndex = () => {
      setPage(page);
      axios.get(`/pokemons.json?page_number=${page}`).then((response) => {
        console.log(response.data);
        setPokemons(response.data);
      });
    };

    handleIndex();
    handleUser();
  }, [page]);

  return (
    <div className="bg-red-500 text-slate-200">
      <div className="pt-4 pl-6 pb-4">
        <p className="py-2 underline">User: {currentUser.username}</p>
        <button
          onClick={handleFavorite}
          className="bg-blue-300 hover:bg-red-500 hover:text-slate-200 hover:scale-105 shadow-xl p-2 rounded-md text-slate-800 font-bold mr-2"
        >
          Favorites
        </button>
        <a
          href="#"
          onClick={handleClick}
          className="bg-blue-300 hover:bg-red-500 hover:text-slate-200 hover:scale-105 shadow-xl p-2 rounded-md text-slate-800 font-bold mr-2"
        >
          Logout
        </a>
      </div>
      <div className="bg-blue-300 text-slate-800 pt-4 pl-6 pb-2 flex-grow min-h-screen">
        <p className="w-1/3">
          <img src="https://fontmeme.com/permalink/240919/0c22a7f039a3fdc9509cb40c65397b7c.png" alt="" />
        </p>
        <div className="flex-grow min-h-screen bg-blue-300 p-4 text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {pokemons
            .filter((pokemon) => favorites.filter((favorite) => favorite.pokemon_id === pokemon.id)[0])
            .map((pokemon) => (
              <div key={pokemon.id} className="">
                <h2></h2>
                <button
                  className="bg-red-500 hover:bg-blue-300 hover:text-slate-800 hover:scale-105 shadow-xl p-2 rounded-md text-slate-200 capitalize w-32"
                  type="primary"
                  onClick={() => handleShow(pokemon)}
                >
                  # {pokemon.pokedex_number}
                  <img className="mx-auto" src={pokemon.sprite} />
                  <p className="capitalize">{pokemon.name}</p>
                </button>
              </div>
            ))}
        </div>
      </div>
      <Modal show={isPokemonsShowVisible} onClose={handleClose}>
        <PokemonsShow pokemon={currentPokemon} version={version}></PokemonsShow>
      </Modal>
    </div>
  );
}
