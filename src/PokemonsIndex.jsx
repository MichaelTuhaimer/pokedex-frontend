export function PokemonsIndex({ pokemons, version, onShow, setPage, page }) {
  const versionValues = {
    "red-blue": {
      display: "Red and Blue",
      url: "https://fontmeme.com/permalink/240911/d415f636c947e504000ff6d73850f7ab.png",
      endIndex: 151,
      pageIndex: 1,
    },
    yellow: {
      display: "Yellow",
      url: "https://fontmeme.com/permalink/240911/82132609c89109515b414f9034a86e9b.png",
      endIndex: 151,
      pageIndex: 1,
    },
    "gold-silver": {
      display: "Gold and Silver",
      url: "https://fontmeme.com/permalink/240911/bfc8eeb0b981514343b2b4d4811bce76.png",
      endIndex: 251,
      pageIndex: 2,
    },
    crystal: {
      display: "Crystal",
      url: "https://fontmeme.com/permalink/240911/fc3bc8213b46df8b31f448f68e72b935.png",
      endIndex: 251,
      pageIndex: 2,
    },
    "ruby-sapphire": {
      display: "Ruby and Sapphire",
      url: "https://fontmeme.com/permalink/240911/5ce743a4f9650db601b55dee0a9e811c.png",
      endIndex: 386,
      pageIndex: 4,
    },
    "firered-leafgreen": {
      display: "FireRed and LeafGreen",
      url: "https://fontmeme.com/permalink/240911/d46c43367387d316da9eff125f1b1968.png",
      endIndex: 386,
      pageIndex: 4,
    },
    emerald: {
      display: "Emerald",
      url: "https://fontmeme.com/permalink/240911/d4eaefde5f31960f2c569af92f57881d.png",
      endIndex: 386,
      pageIndex: 4,
    },
    colosseum: {
      display: "Colosseum",
      url: "https://fontmeme.com/permalink/240911/db23373cf1c8ecdad43edb7c4dd59fd7.png",
      endIndex: 386,
      pageIndex: 4,
    },
    xd: {
      display: "XD: Gale of Darkness",
      url: "https://fontmeme.com/permalink/240911/64e228bd3f8bec4c19a706fa4c3fbe44.png",
      endIndex: 386,
      pageIndex: 4,
    },
    "diamond-pearl": {
      display: "Diamond and Pearl",
      url: "https://fontmeme.com/permalink/240911/1f4b4156ae39a47b109ce32d1f1222a6.png",
      endIndex: 493,
      pageIndex: 4,
    },
    platinum: {
      display: "Platinum",
      url: "https://fontmeme.com/permalink/240911/16800ed591efa85c6215cd40ba5e9e86.png",
      endIndex: 493,
      pageIndex: 4,
    },
    "heartgold-soulsilver": {
      display: "HeartGold and SoulSilver",
      url: "https://fontmeme.com/permalink/240913/c5a41f0047e3dd602482911301c256ec.png",
      endIndex: 493,
      pageIndex: 4,
    },
    "black-white": {
      display: "Black and White",
      url: "https://fontmeme.com/permalink/240911/cc41680a3fb61c63177df32e9365693a.png",
      endIndex: 649,
      pageIndex: 6,
    },
    "black-2-white-2": {
      display: "Black 2 and White 2",
      url: "https://fontmeme.com/permalink/240913/868335b5b8ad95e352905f823e15911c.png",
      endIndex: 649,
      pageIndex: 6,
    },
    "x-y": {
      display: "X and Y",
      url: "https://fontmeme.com/permalink/240911/aac9683d5769ab378a180a2f94d23cb4.png",
      endIndex: 721,
      pageIndex: 7,
    },
    "omega-ruby-alpha-sapphire": {
      display: "Omega Ruby and Alpha Sapphire",
      url: "https://fontmeme.com/permalink/240911/2e00c7d1d879984a53bb57fad6f356d7.png",
      endIndex: 721,
      pageIndex: 7,
    },
    "sun-moon": {
      display: "Sun and Moon",
      url: "https://fontmeme.com/permalink/240911/153aaa5b65860757b0fc5d8aad82f021.png",
      endIndex: 809,
      pageIndex: 8,
    },
    "ultra-sun-ultra-moon": {
      display: "Ultra Sun and Ultra Moon",
      url: "https://fontmeme.com/permalink/240911/7feead6ce689fbd5dfb50f6c599fe11f.png",
      endIndex: 809,
      pageIndex: 8,
    },
    "lets-go-pikachu-lets-go-eevee": {
      display: "Let's Go, Pikachu! and Let's Go, Eevee!",
      url: "https://fontmeme.com/permalink/240911/1e502833c8d4b34aaf5c896cdc8bea1f.png",
      endIndex: 809,
      pageIndex: 8,
    },
    "sword-shield": {
      display: "Sword and Shield",
      url: "https://fontmeme.com/permalink/240913/53ca8a3ce482785b51166488e8549aaf.png",
      endIndex: 905,
      pageIndex: 9,
    },
    "brilliant-diamond-and-shining-pearl": {
      display: "Brilliant Diamond and Shining Pearl",
      url: "https://fontmeme.com/permalink/240911/cad916cd725406f9f3dd30b4126015f3.png",
      endIndex: 905,
      pageIndex: 9,
    },
    "scarlet-violet": {
      display: "Scarlet and Violet",
      url: "https://fontmeme.com/permalink/240913/b60c0cef4bc4e23d6abd20cb424cc488.png",
      endIndex: 1025,
      pageIndex: 10,
    },
  };

  const endIndex = version ? versionValues[version]?.endIndex : 1025;
  const pageIndex = version ? versionValues[version]?.pageIndex : 10;

  return (
    <div>
      <div className="bg-red-500 pr-4 pb-2">
        <img className="p-2 pl-10 w-1/6 ml-auto" src={versionValues[version]?.url} />
      </div>
      <div className="bg-red-500 rounded-b-md px-4 pb-4">
        <div className="grid grid-cols-2 text">
          {page > 0 && (
            <button onClick={() => setPage((page) => Math.max(page - 1, 0))} disabled={page <= 0}>
              <img
                className="w-1/12 mr-auto transform hover:scale-105 hover:opacity-85"
                src="https://fontmeme.com/permalink/240913/4a3e3a08a4d79df77d890cb66b92990e.png"
              />
            </button>
          )}
          {page === 0 && <p></p>}
          {page != pageIndex && (
            <button onClick={() => setPage((page) => Math.min(page + 1, pageIndex))} disabled={page >= pageIndex}>
              <img
                className="w-1/12 ml-auto transform hover:scale-105 hover:opacity-85"
                src="https://fontmeme.com/permalink/240913/fba27ede6ee4229d18566dc15876b3c7.png"
              />
            </button>
          )}
        </div>
      </div>
      <div className="p-4 text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {pokemons
          .filter((pokemon) => pokemon.id >= 1 && pokemon.id <= endIndex)
          .map((pokemon) => (
            <div key={pokemon.id} className="">
              <h2></h2>
              <button
                className="bg-red-500 hover:bg-blue-300 hover:text-slate-800 hover:scale-105 shadow-xl p-2 rounded-md text-slate-200 capitalize w-32"
                type="primary"
                onClick={() => onShow(pokemon)}
              >
                # {pokemon.pokedex_number}
                <img className="mx-auto" src={pokemon.sprite} />
                <p className="capitalize">{pokemon.name}</p>
              </button>
            </div>
          ))}
      </div>
      <div className="bg-red-500 rounded-t-md p-2 pt-4 px-4">
        <div className="grid grid-cols-2 text">
          {page > 0 && (
            <button onClick={() => setPage((page) => Math.max(page - 1, 0))} disabled={page <= 0}>
              <img
                className="w-1/12 mr-auto transform hover:scale-105 hover:opacity-85"
                src="https://fontmeme.com/permalink/240913/4a3e3a08a4d79df77d890cb66b92990e.png"
              />
            </button>
          )}
          {page === 0 && <p></p>}
          {page != pageIndex && (
            <button onClick={() => setPage((page) => Math.min(page + 1, pageIndex))} disabled={page >= pageIndex}>
              <img
                className="w-1/12 ml-auto transform hover:scale-105 hover:opacity-85"
                src="https://fontmeme.com/permalink/240913/fba27ede6ee4229d18566dc15876b3c7.png"
              />
            </button>
          )}
        </div>
        <img className="p-2 pl-10 w-1/6 ml-auto pt-4" src={versionValues[version]?.url} />
      </div>
    </div>
  );
}
