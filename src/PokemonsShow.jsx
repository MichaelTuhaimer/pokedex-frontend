import axios from "axios";
import { useState } from "react";

export function PokemonsShow({ pokemon, version }) {
  const jwt = localStorage.getItem("jwt");
  const [favorites, setFavorites] = useState([]);

  if (jwt) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post(`/favorites.json`, { pokemon_id: params }).then((response) => {
      setFavorites([...favorites, response.data]);
      successCallback();
    });
  };

  const versionValues = {
    "red-blue": {
      display: "Red and Blue",
      url: "https://fontmeme.com/permalink/240911/d415f636c947e504000ff6d73850f7ab.png",
      sprite: pokemon["sprites"]["versions"]["generation-i"]["red-blue"]["front_default"],
    },
    yellow: {
      display: "Yellow",
      url: "https://fontmeme.com/permalink/240911/82132609c89109515b414f9034a86e9b.png",
      sprite: pokemon["sprites"]["versions"]["generation-i"]["yellow"]["front_default"],
    },
    "gold-silver": {
      display: "Gold and Silver",
      url: "https://fontmeme.com/permalink/240911/bfc8eeb0b981514343b2b4d4811bce76.png",
      sprite: pokemon["sprites"]["versions"]["generation-ii"]["gold"]["front_default"],
    },
    crystal: {
      display: "Crystal",
      url: "https://fontmeme.com/permalink/240911/fc3bc8213b46df8b31f448f68e72b935.png",
      sprite: pokemon["sprites"]["versions"]["generation-ii"]["crystal"]["front_default"],
    },
    "ruby-sapphire": {
      display: "Ruby and Sapphire",
      url: "https://fontmeme.com/permalink/240911/5ce743a4f9650db601b55dee0a9e811c.png",
      sprite: pokemon["sprites"]["versions"]["generation-iii"]["ruby-sapphire"]["front_default"],
    },
    "firered-leafgreen": {
      display: "FireRed and LeafGreen",
      url: "https://fontmeme.com/permalink/240911/d46c43367387d316da9eff125f1b1968.png",
      sprite: pokemon["sprites"]["versions"]["generation-iii"]["firered-leafgreen"]["front_default"],
    },
    emerald: {
      display: "Emerald",
      url: "https://fontmeme.com/permalink/240911/d4eaefde5f31960f2c569af92f57881d.png",
      sprite: pokemon["sprites"]["versions"]["generation-iii"]["emerald"]["front_default"],
    },
    colosseum: {
      display: "Colosseum",
      url: "https://fontmeme.com/permalink/240911/db23373cf1c8ecdad43edb7c4dd59fd7.png",
      sprite: pokemon["sprites"]["other"]["showdown"]["front_default"],
    },
    xd: {
      display: "XD: Gale of Darkness",
      url: "https://fontmeme.com/permalink/240911/64e228bd3f8bec4c19a706fa4c3fbe44.png",
      sprite: pokemon["sprites"]["other"]["showdown"]["front_default"],
    },
    "diamond-pearl": {
      display: "Diamond and Pearl",
      url: "https://fontmeme.com/permalink/240911/1f4b4156ae39a47b109ce32d1f1222a6.png",
      sprite: pokemon["sprites"]["versions"]["generation-iv"]["diamond-pearl"]["front_default"],
    },
    platinum: {
      display: "Platinum",
      url: "https://fontmeme.com/permalink/240911/16800ed591efa85c6215cd40ba5e9e86.png",
      sprite: pokemon["sprites"]["versions"]["generation-iv"]["platinum"]["front_default"],
    },
    "heartgold-soulsilver": {
      display: "HeartGold and SoulSilver",
      url: "https://fontmeme.com/permalink/240911/c5a41f0047e3dd602482911301c256ec.png",
      sprite: pokemon["sprites"]["versions"]["generation-iv"]["heartgold-soulsilver"]["front_default"],
    },
    "black-white": {
      display: "Black and White",
      url: "https://fontmeme.com/permalink/240911/cc41680a3fb61c63177df32e9365693a.png",
      sprite: pokemon["sprites"]["versions"]["generation-v"]["black-white"]["front_default"],
    },
    "black-2-white-2": {
      display: "Black 2 and White 2",
      url: "https://fontmeme.com/permalink/240911/868335b5b8ad95e352905f823e15911c.png",
      sprite: pokemon["sprites"]["versions"]["generation-v"]["black-white"]["front_default"],
    },
    "x-y": {
      display: "X and Y",
      url: "https://fontmeme.com/permalink/240911/aac9683d5769ab378a180a2f94d23cb4.png",
      sprite: pokemon["sprites"]["versions"]["generation-vi"]["x-y"]["front_default"],
    },
    "omega-ruby-alpha-sapphire": {
      display: "Omega Ruby and Alpha Sapphire",
      url: "https://fontmeme.com/permalink/240911/2e00c7d1d879984a53bb57fad6f356d7.png",
      sprite: pokemon["sprites"]["versions"]["generation-vi"]["omegaruby-alphasapphire"]["front_default"],
    },
    "sun-moon": {
      display: "Sun and Moon",
      url: "https://fontmeme.com/permalink/240911/153aaa5b65860757b0fc5d8aad82f021.png",
      sprite: pokemon["sprites"]["versions"]["generation-vii"]["icons"]["front_default"],
    },
    "ultra-sun-ultra-moon": {
      display: "Ultra Sun and Ultra Moon",
      url: "https://fontmeme.com/permalink/240911/7feead6ce689fbd5dfb50f6c599fe11f.png",
      sprite: pokemon["sprites"]["versions"]["generation-vii"]["ultra-sun-ultra-moon"]["front_default"],
    },
    "lets-go-pikachu-lets-go-eevee": {
      display: "Let's Go, Pikachu! and Let's Go, Eevee!",
      url: "https://fontmeme.com/permalink/240911/1e502833c8d4b34aaf5c896cdc8bea1f.png",
      sprite: pokemon["sprites"]["versions"]["generation-vii"]["ultra-sun-ultra-moon"]["front_default"],
    },
    "sword-shield": {
      display: "Sword and Shield",
      url: "https://fontmeme.com/permalink/240911/53ca8a3ce482785b51166488e8549aaf.png",
      sprite: pokemon["sprites"]["other"]["home"]["front_default"],
    },
    "brilliant-diamond-and-shining-pearl": {
      display: "Brilliant Diamond and Shining Pearl",
      url: "https://fontmeme.com/permalink/240911/cad916cd725406f9f3dd30b4126015f3.png",
      sprite: pokemon["sprites"]["other"]["home"]["front_default"],
    },
    "scarlet-violet": {
      display: "Scarlet and Violet",
      url: "https://fontmeme.com/permalink/240911/b60c0cef4bc4e23d6abd20cb424cc488.png",
      sprite: pokemon["sprites"]["other"]["home"]["front_default"],
    },
  };

  const types = {
    normal: "/images/Type_Normal.png",
    fire: "/images/Type_Fire.png",
    water: "/images/Type_Water.png",
    electric: "/images/Type_Electric.png",
    grass: "/images/Type_Grass.png",
    ice: "/images/Type_Ice.png",
    fighting: "/images/Type_Fighting.png",
    poison: "/images/Type_Poison.png",
    ground: "/images/Type_Ground.png",
    flying: "/images/Type_Flying.png",
    psychic: "/images/Type_Psychic.png",
    bug: "/images/Type_Bug.png",
    rock: "/images/Type_Rock.png",
    ghost: "/images/Type_Ghost.png",
    dragon: "/images/Type_Dragon.png",
    dark: "/images/Type_Dark.png",
    steel: "/images/Type_Steel.png",
    fairy: "/images/Type_Fairy.png",
  };

  if (pokemon["types"][1]) {
    var type1 = types[pokemon["types"][0]["type"]["name"]];
    var type2 = types[pokemon["types"][1]["type"]["name"]];
  } else {
    var type = types[pokemon["types"][0]["type"]["name"]];
  }

  const sprite = version
    ? versionValues[version]?.sprite || pokemon["sprites"]["other"]["official-artwork"]["front_default"]
    : pokemon["sprites"]["other"]["official-artwork"]["front_default"];

  if (version) {
    var orderedLevels = [];
    pokemon["moves"].forEach(function (move) {
      move["version_group_details"].forEach(function (level) {
        if (level["move_learn_method"]["name"] === "level-up" && level["version_group"]["name"] === version) {
          orderedLevels.push(level["level_learned_at"]);
        }
      });
    });
    orderedLevels = Array.from(new Set(orderedLevels)).sort((a, b) => a - b);
    var moveTable = [];
    orderedLevels.forEach(function (level) {
      pokemon["moves"].forEach(function (move) {
        move["version_group_details"].forEach(function (sMove) {
          if (sMove["level_learned_at"] === level && sMove["version_group"]["name"] === version) {
            moveTable.push(move["move"]["name"]);
          }
        });
      });
    });
    var levelMove = [];
    var index = 0;
    while (index < orderedLevels.length) {
      var level = orderedLevels[index];
      var move = moveTable[index];
      levelMove.push(level);
      levelMove.push(move);
      index = index + 1;
    }
  }

  return (
    <div>
      <h1># {pokemon.id}</h1>
      <h2 className="capitalize font-extrabold">{pokemon.name}</h2>
      <img className="mx-auto w-48 h-48 object-contain" src={sprite} alt={`${pokemon.name} sprite`} />

      {pokemon["types"][1] ? (
        <div className="grid grid-cols-3">
          <h3 className="text-right">Type:</h3>
          <img className="uppercase pl-2" src={type1} alt={pokemon["types"][0]["type"]["name"]} />
          <img className="uppercase" src={type2} alt={pokemon["types"][1]["type"]["name"]} />
        </div>
      ) : (
        <div className="grid grid-cols-2">
          <h3 className="pl-10">Type:</h3>
          <img className="mr-auto uppercase" src={type} alt={pokemon["types"][0]["type"]["name"]} />
        </div>
      )}

      <h3 style={{ textTransform: "capitalize" }}>Ability: {pokemon.abilities[0].ability.name}</h3>
      <h3 className="pt-2">Height: {pokemon.height / 10} m</h3>
      <h3>Weight: {pokemon.weight / 10} kg</h3>
      <h3 className="font-bold underline py-2">Base Stats</h3>
      <ul className="grid grid-cols-2 gap-0 text-xs p- border">
        <li className="border p-0.5">HP</li>
        <li className="border p-0.5">{pokemon.stats[0].base_stat}</li>
        <li className="border p-0.5">Attack</li>
        <li className="border p-0.5">{pokemon["stats"][1]["base_stat"]}</li>
        <li className="border p-0.5">Defense</li>
        <li className="border p-0.5">{pokemon["stats"][2]["base_stat"]}</li>
        <li className="border p-0.5">Special Attack</li>
        <li className="border p-0.5">{pokemon["stats"][3]["base_stat"]}</li>
        <li className="border p-0.5">Special Defense</li>
        <li className="border p-0.5">{pokemon["stats"][4]["base_stat"]}</li>
        <li className="border p-0.5">Speed</li>
        <li className="border p-0.5">{pokemon["stats"][5]["base_stat"]}</li>
      </ul>

      {version && (
        <div>
          <h3 className="font-bold underline py-2">Move List</h3>
          <ul className="grid grid-cols-2 gap-0 text-xs p- border">
            {levelMove.map((item) => (
              <li key={item.id} className="border p-0.5">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="font-bold pb-2">(Version: {versionValues[version]?.display})</h3>
        </div>
      )}
      {jwt && (
        <div className="pt-4">
          <button
            className="bg-blue-300 hover:bg-red-500 hover:text-slate-200 hover:scale-105 shadow-xl p-2 rounded-md text-slate-800 font-bold"
            onClick={() => handleCreate(pokemon.id)}
          >
            Add favorite
          </button>
        </div>
      )}
    </div>
  );
}
