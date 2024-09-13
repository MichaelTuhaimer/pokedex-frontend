import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="text-left pl-4">
      <h1 className="underline font-bold pb-2">Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="pb-2">
          Name:{" "}
          <input
            className="text-slate-800 bg-blue-100 rounded shadow-xl transform opacity-85 hover:opacity-100"
            name="name"
            type="text"
          />
        </div>
        <div className="pb-2">
          E-Mail:{" "}
          <input
            className="text-slate-800 bg-blue-100 rounded shadow-xl transform opacity-85 hover:opacity-100"
            name="email"
            type="email"
          />
        </div>
        <div className="pb-2">
          Username:{" "}
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
        <div className="pb-2">
          Confirm password:{" "}
          <input
            className="text-slate-800 bg-blue-100 rounded shadow-xl transform opacity-85 hover:opacity-100"
            name="password_confirmation"
            type="password"
          />
        </div>
        <button
          className="bg-blue-300 hover:bg-red-500 hover:text-slate-200 hover:scale-105 shadow-xl p-2 rounded-md text-slate-800 font-bold"
          type="submit"
        >
          Create account
        </button>
      </form>
    </div>
  );
}
