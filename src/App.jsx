import axios from "axios";
import { PokemonsPage } from "./PokemonsPage";

axios.defaults.baseURL =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://pokedex-backend-dllz.onrender.com";

function App() {
  return (
    <div>
      <PokemonsPage />
    </div>
  );
}

export default App;
