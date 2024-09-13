import axios from "axios";

export function LogoutLink() {
  const jwt = localStorage.getItem("jwt");

  if (jwt) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }

  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div className="pt-4 pl-6 pb-2">
      <a
        href="#"
        onClick={handleClick}
        className="bg-blue-300 hover:bg-red-500 hover:text-slate-200 hover:scale-105 shadow-xl p-2 rounded-md text-slate-800 font-bold"
      >
        Logout
      </a>
    </div>
  );
}
