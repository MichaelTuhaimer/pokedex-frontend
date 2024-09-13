import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email/username or password"]);
      });
  };

  return (
    <div id="login" className="pl-4 text-left">
      <h1 className="underline font-bold pb-2">Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="pb-2">
          E-Mail:{" "}
          <input
            className="border-solid text-slate-800 bg-blue-100 rounded shadow-xl transform opacity-85 hover:opacity-100"
            name="email"
            type="email"
          />{" "}
        </div>
        <div className="pb-2">
          or Username:{" "}
          <input
            className="text-slate-800 bg-blue-100 rounded shadow-xl transform opacity-85 hover:opacity-100"
            name="username"
            type="text"
          />
        </div>
        <div className="pb-2">
          Password:{" "}
          <input
            className="text-slate-800 bg-blue-100 rounded shadow-xl transform opacity-85 hover:opacity-100"
            name="password"
            type="password"
          />
        </div>
        <button
          className="bg-blue-300 hover:bg-red-500 hover:text-slate-200 hover:scale-105 shadow-xl p-2 rounded-md text-slate-800 font-bold"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
