import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo.png";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-50 border-gray-200 fixed w-full z-20 top-0 left-0 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3">
          <img
            src={logoDark}
            className="h-8 cursor-pointer"
            alt="DeFin Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            (De)Fin
          </span>
        </div>
        
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto transition-all duration-300 ease-in-out`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-blue-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "block py-2 px-3 text-blue-700 rounded md:bg-transparent md:p-0" : "block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Manifesto"
                className={({ isActive }) =>
                  isActive ? "block py-2 px-3 text-blue-700 rounded md:bg-transparent md:p-0" : "block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0"
                }
                aria-current="page"
              >
                <div className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2"
                  >
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  Manifesto
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  isActive ? "block py-2 px-3 text-blue-700 rounded md:bg-transparent md:p-0" : "block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0"
                }
              >
                Timeline
              </NavLink>
            </li>
            <li>
              <a
                href="https://x.com/defin_one"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;