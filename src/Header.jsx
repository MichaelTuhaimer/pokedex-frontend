import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const versions = {
    "Red and Blue": "red-blue",
    Yellow: "yellow",
    "Gold and Silver": "gold-silver",
    Crystal: "crystal",
    "Ruby and Sapphire": "ruby-sapphire",
    "FireRed and LeafGreen": "firered-leafgreen",
    Emerald: "emerald",
    Colosseum: "colosseum",
    "XD: Gale of Darkness": "xd",
    "Diamond and Pearl": "diamond-pearl",
    Platinum: "platinum",
    "HeartGold and SoulSilver": "heartgold-soulsilver",
    "Black and White": "black-white",
    "Black 2 and White 2": "black-2-white-2",
    "X and Y": "x-y",
    "Omega Ruby and Alpha Sapphire": "omega-ruby-alpha-sapphire",
    "Sun and Moon": "sun-moon",
    "Ultra Sun and Ultra Moon": "ultra-sun-ultra-moon",
    "Let's Go, Pikachu! and Let's Go, Eevee!": "lets-go-pikachu-lets-go-eevee",
    "Sword and Shield": "sword-shield",
    "Brilliant Diamond and Shining Pearl": "brilliant-diamond-and-shining-pearl",
    "Scarlet and Violet": "scarlet-violet",
  };

  return (
    <div className="bg-red-500 top-0 left-0 w-full z-50 grid grid-cols-2">
      <button>
        <a href="/">
          <img
            src="https://ik.imagekit.io/hwyksvj4iv/pokedex_N_WgWrJK0s.png"
            alt=""
            className="mx-5 py-2 w-1/2 transform hover:scale-105 hover:opacity-85"
          />
        </a>
      </button>
      <div>
        <button onClick={toggleDropdown} className="absolute right-0 pr-4 pt-4 hover:opacity-85 hover:scale-105 w-1/5">
          {/* <img
            src="https://fontmeme.com/permalink/240911/bef2ff728f0bbece5eb3752afb179893.png"
            // use yellow EFC100
            alt="pokemon-font"
            border="0"
          /> */}
          <img
            src="https://fontmeme.com/permalink/240911/1afd2ff91fbede10b428e1acc1daac80.png"
            alt="pokemon-font"
            border="0"
          />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-red-500 ring-1 ring-black ring-opacity-5">
            {Object.keys(versions).map((version) => (
              <a
                key={version}
                href={`?version=${versions[version]}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-slate-200 hover:bg-blue-300 hover:text-slate-800"
              >
                {version}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
