import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { PokemonsPage } from "./PokemonsPage";
import { UserPage } from "./UserPage";

axios.defaults.baseURL =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://pokedex-backend-dllz.onrender.com";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <PokemonsPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
