import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export function PokemonsIndex({ pokemons, onShow }) {
  // if (!pokemons || pokemons.length === 0) {
  //   return <p>No Pokemons available</p>;
  // }
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <h2>#{pokemon.pokedex_number}</h2>
          <AwesomeButton style={{ textTransform: "capitalize" }} type="primary" onPress={() => onShow(pokemon)}>
            {pokemon.name}
          </AwesomeButton>
        </div>
      ))}
    </div>
  );
}
