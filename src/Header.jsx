import { useState } from "react";
import { Link } from "react-router-dom";

import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";

export function Header() {
  const [isOpenL, setIsOpenL] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);
  const toggleDropdownL = () => setIsOpenL(!isOpenL);
  const toggleDropdownS = () => setIsOpenS(!isOpenS);
  const jwt = localStorage.getItem("jwt");

  return (
    <div className="bg-red-500 top-0 left-0 w-full z-50">
      <button>
        <Link to="/">
          <img
            src="https://ik.imagekit.io/hwyksvj4iv/pokedex_N_WgWrJK0s.png"
            alt=""
            className="mx-5 pb-2 pt-4 w-1/2 transform hover:scale-105 hover:opacity-85"
          />
        </Link>
      </button>

      {!jwt && (
        <div className="grid grid-cols-10">
          <div className="pl-6 pt-4">
            <button
              onClick={() => {
                toggleDropdownL();
                if (isOpenS) {
                  setIsOpenS(false);
                }
              }}
              className="bg-blue-300 hover:bg-red-500 hover:text-slate-200 hover:scale-105 shadow-xl p-2 rounded-md text-slate-800 font-bold"
            >
              Login
            </button>
            {isOpenL && (
              <div className="absolute left-0 mt-2 w-1/2 rounded-md shadow-lg bg-red-500 ring-1 ring-black ring-opacity-5 pt-2">
                <div className="bg-red-500 text-slate-200 pb-4">
                  <LoginPage />
                </div>
              </div>
            )}
          </div>
          <div className="pl-4 pt-4">
            <button
              onClick={() => {
                toggleDropdownS();
                if (isOpenL) {
                  setIsOpenL(false);
                }
              }}
              className="bg-blue-300 hover:bg-red-500 hover:text-slate-200 hover:scale-105 shadow-xl p-2 rounded-md text-slate-800 font-bold"
            >
              Signup
            </button>
            {isOpenS && (
              <div className="absolute left-0 mt-2 w-1/2 rounded-md shadow-lg bg-red-500 ring-1 ring-black ring-opacity-5 pt-2">
                <div className="bg-red-500 text-slate-200 pb-4">
                  <SignupPage />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="text-slate-200 bg-red-500 text-left pr-4 pl-6 pt-4">
        {jwt && (
          <Link
            className="bg-blue-300 hover:bg-red-500 hover:text-slate-200 hover:scale-105 shadow-xl p-2 rounded-md text-slate-800 font-bold"
            to="/user"
          >
            Profile
          </Link>
        )}
      </div>
    </div>
  );
}
