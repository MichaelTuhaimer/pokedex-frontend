import axios from "axios";
import { PokemonsPage } from "./PokemonsPage";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <PokemonsPage />
    </div>
  );
}

export default App;
