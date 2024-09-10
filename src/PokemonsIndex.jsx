export function PokemonsIndex({ pokemons, onShow }) {
  // if (!pokemons || pokemons.length === 0) {
  //   return <p>No Pokemons available</p>;
  // }
  return (
    <div className="p-4 text-center grid grid-cols-6 gap-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="">
          <h2></h2>
          <button
            className="bg-red-500 hover:bg-blue-300 hover:text-slate-800 hover:scale-105 shadow-xl p-2 rounded-md text-slate-200 capitalize"
            type="primary"
            onClick={() => onShow(pokemon)}
          >
            #{pokemon.pokedex_number}
            <img className="mx-auto" src={pokemon.sprite} />
            <p className="capitalize">{pokemon.name}</p>
          </button>
        </div>
      ))}
    </div>
  );
}
