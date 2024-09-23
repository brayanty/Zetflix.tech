import "./index.css";
import { faUsers, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import menu from "../../assets/menu.png";
import PropTypes from "prop-types";
import { useState } from "react";

// Nose como verificar el scroll de otra manera asi que por eso esta asi
function useScrollView(setStickyScroll, setMenuON) {
  window.onscroll = function () {
    scrollVerify();
  };
  function scrollVerify() {
    if (window.scrollY >= 400) {
      setMenuON(false);
    }

    if (window.scrollY >= 200) {
      setStickyScroll("black-blur");
      return;
    }
    if (window.scrollY === 0) {
      setStickyScroll("");
      return;
    }
  }
}

Navbar.propTypes = {
  isSelectModeDark: PropTypes.string.isRequired,
  themeSelect: PropTypes.func,
};

function Navbar({ isSelectModeDark, themeSelect }) {
  // Menu visible o no
  const [menuON, setMenuON] = useState(false);
  // Mostrar el black-blur
  const [isStickyScroll, setStickyScroll] = useState("");

  useScrollView(setStickyScroll, setMenuON);

  const handlerClickMenu = () => {
    setMenuON((prevState) => !prevState);
  };

  return (
    <nav
      className={`${
        isStickyScroll === "black-blur" ? "black-blur" : ""
      }  transition-all duration-200 ease-out fixed top-0 w-full flex gap-1 h-10 p-6 z-50`}
    >
      <div className="container mx-auto md:w-[70%] flex justify-between items-center ">
        <div className="flex items-center">
          <h5
            className={`${
              isStickyScroll === "black-blur"
                ? "text-white  border-white"
                : "text-black border-slate-950"
            } font-primarybold max-md:text-gray-50 dark:text-gray-50 shadow-black dark:shadow-slate-300 text-shadow-md text-4xl uppercase`}
          >
            Zetflix
          </h5>
        </div>
        <div
          className={`${
            menuON
              ? "max-md:opacity-100"
              : "max-md:opacity-0 max-md:-translate-y-full"
          } top-0 right-0 transition-all flex flex-col md:flex-row gap-6 max-md:gap-8 items-center  max-md:absolute max-md:pt-14 max-md:bg-black fill-transparent rounded-md max-md:h-screen max-md:w-2/5`}
        >
          <div className="md:hidden">
            <h4 className="text-gray-50 text-3xl">Menu</h4>
          </div>
          <ul className="font-primaryMedium max-md:self-start max-md:m-3 flex items-center gap-4 flex-col md:flex-row">
            <li>
              <a
                className={`${
                  isStickyScroll === "black-blur"
                    ? "text-white border-white"
                    : "text-black border-slate-950"
                } transition-all dark:border-gray-300 hover:border-b-4 font-bold max-md:text-gray-50 dark:text-gray-50`}
                href="#Proyects"
              >
                <FontAwesomeIcon icon={faBook} size="sm" /> Proyectos
              </a>
            </li>
            <li>
              <a
                className={`${
                  isStickyScroll === "black-blur"
                    ? "text-white border-white"
                    : "text-black border-slate-950"
                } transition-all dark:border-gray-300 hover:border-b-4 font-bold max-md:text-gray-50 dark:text-gray-50`}
                href="#contacts"
              >
                <FontAwesomeIcon icon={faUsers} size="sm" /> Contactos
              </a>
            </li>
            <li className="self-start">
              <button
                aria-label="true"
                className="w-20 p-1 text-center transition-all ease-in-out hover:shadow-sm dark:hover:border-gray-200"
                type="button"
                onClick={() => themeSelect()}
              >
                {isSelectModeDark === "light" ? (
                  <span
                    className={`${
                      isStickyScroll === "black-blur"
                        ? "text-white"
                        : "text-black"
                    } flex gap-1 transition-all font-bold max-md:text-gray-50 dark:text-gray-50 `}
                  >
                    <FontAwesomeIcon icon={faSun} size="xl" />
                    Dark
                  </span>
                ) : (
                  <span
                    className={`${
                      isStickyScroll === "black-blur"
                        ? "text-white"
                        : "text-black"
                    } flex gap-1 transition-all font-bold max-md:text-gray-50 dark:text-gray-50`}
                  >
                    <FontAwesomeIcon icon={faMoon} size="xl" />
                    Light
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
        <div onClick={handlerClickMenu} className="cursor-pointer md:hidden">
          <img
            className={`h-10 ${
              isSelectModeDark === "dark"
                ? "invert"
                : menuON === true
                ? "invert"
                : "invert-0"
            }`}
            src={menu}
            alt="Logo de menu"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
