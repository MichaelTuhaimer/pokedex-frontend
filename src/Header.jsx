export function Header() {
  return (
    <div className="bg-red-500 sticky top-0 left-0 w-full z-50 grid grid-cols-2">
      <button>
        <img
          src="https://ik.imagekit.io/hwyksvj4iv/pokedex_N_WgWrJK0s.png"
          alt=""
          className="mx-5 py-2 w-1/2 transform hover:scale-105 hover:opacity-85"
        />
      </button>
      <button className="ml-auto pr-4 pt-4 hover:opacity-85 hover:scale-105 w-1/3">
        <img src="https://fontmeme.com/temporary/bef2ff728f0bbece5eb3752afb179893.png" alt="" />
      </button>
    </div>
  );
}
