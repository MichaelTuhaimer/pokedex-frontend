export function PokemonsShow({ pokemon }) {
  return (
    <div>
      <h1># {pokemon.id}</h1>
      <h2 className="capitalize font-extrabold">{pokemon.name}</h2>
      <img className="mx-auto" src={pokemon["sprites"]["other"]["official-artwork"]["front_default"]} />

      {pokemon["types"][1] ? (
        <h3 className="capitalize">
          Type: {pokemon["types"][0]["type"]["name"]}, {pokemon["types"][1]["type"]["name"]}
        </h3>
      ) : (
        <h3 className="capitalize">Type: {pokemon["types"][0]["type"]["name"]}</h3>
      )}

      <h3 style={{ textTransform: "capitalize" }}>Ability: {pokemon.abilities[0].ability.name}</h3>
      <h3 className="pt-2">Height: {pokemon.height / 10} m</h3>
      <h3>Weight: {pokemon.weight / 10} kg</h3>
      <h3 className="font-bold underline py-2">Base Stats</h3>
      <ul className="grid grid-cols-2 gap-0 text-xs p- border">
        <li className="border p-1">HP</li>
        <li className="border p-1">{pokemon.stats[0].base_stat}</li>
        <li className="border p-1">Attack</li>
        <li className="border p-1">{pokemon["stats"][1]["base_stat"]}</li>
        <li className="border p-1">Defense</li>
        <li className="border p-1">{pokemon["stats"][2]["base_stat"]}</li>
        <li className="border p-1">Special Attack</li>
        <li className="border p-1">{pokemon["stats"][3]["base_stat"]}</li>
        <li className="border p-1">Special Defense</li>
        <li className="border p-1">{pokemon["stats"][4]["base_stat"]}</li>
        <li className="border p-1">Speed</li>
        <li className="border p-1">{pokemon["stats"][5]["base_stat"]}</li>
      </ul>
    </div>
  );
}

// puts
// puts color.bold("Level-Up Move List:")
// puts "(Version: #{version_choice})"
// ordered_levels = []
// data["moves"].each do |move|
//   move["version_group_details"].each do |level|
//     if level["move_learn_method"]["name"] == "level-up" && level["version_group"]["name"] == version
//       ordered_levels << level["level_learned_at"]
//     end
//   end
// end
// ordered_levels = ordered_levels.uniq.sort

// movetable = TTY::Table.new(header: ["Level", "Move"])
// data["stats"].each do |stat|
//   [stat["stat"]["name"], stat["base_stat"]]
// end

// ordered_levels.each do |level|
//   data["moves"].each do |move|
//     move["version_group_details"].each do |s_move|
//       if s_move["level_learned_at"] == level && s_move["version_group"]["name"] == version
//         movetable << [level, move["move"]["name"]]
//       end
//     end
//   end
// end
