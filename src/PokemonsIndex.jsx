export function PokemonsIndex({ pokemons }) {
  if (!pokemons.id) {
    return;
  }
  return (
    <div>
      <h2>#{pokemons.id}</h2>
      <h1>Pokemon: {pokemons.name}</h1>
      <h3>Ability: {pokemons.abilities[0].ability.name}</h3>
      <h3>Height: {pokemons.height / 10}m</h3>
      <h3>Weight: {pokemons.weight / 10}kg</h3>
      <ul>
        <li>HP: {pokemons.stats[0].base_stat}</li>
        <li>Attack: {pokemons["stats"][1]["base_stat"]}</li>
        <li>Defense: {}</li>
        <li>Special Attack: {}</li>
        <li>Special Defense {}</li>
        <li>Speed: {}</li>
      </ul>
    </div>
  );
}
