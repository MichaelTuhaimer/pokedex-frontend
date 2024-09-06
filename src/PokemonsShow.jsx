export function PokemonsShow({ pokemon }) {
  return (
    <div>
      <h1># {pokemon.id}</h1>
      <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>
      <img src={pokemon["sprites"]["other"]["showdown"]["front_default"]} />

      {pokemon["types"][1] ? (
        <h3>
          Type: {pokemon["types"][0]["type"]["name"]}, {pokemon["types"][1]["type"]["name"]}
        </h3>
      ) : (
        <h3>Type: {pokemon["types"][0]["type"]["name"]}</h3>
      )}

      <h3 style={{ textTransform: "capitalize" }}>Ability: {pokemon.abilities[0].ability.name}</h3>
      <h3>Height: {pokemon.height / 10} m</h3>
      <h3>Weight: {pokemon.weight / 10} kg</h3>
      <ul>
        <li>HP: {pokemon.stats[0].base_stat}</li>
        <li>Attack: {pokemon["stats"][1]["base_stat"]}</li>
        <li>Defense: {pokemon["stats"][2]["base_stat"]}</li>
        <li>Special Attack: {pokemon["stats"][3]["base_stat"]}</li>
        <li>Special Defense {pokemon["stats"][4]["base_stat"]}</li>
        <li>Speed: {pokemon["stats"][5]["base_stat"]}</li>
      </ul>
    </div>
  );
}
