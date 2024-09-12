import axios from "axios";
import { PokemonsPage } from "./PokemonsPage";

axios.defaults.baseURL = "https://pokedex-backend-dllz.onrender.com";

function App() {
  return (
    <div>
      <PokemonsPage />
    </div>
  );
}

export default App;
