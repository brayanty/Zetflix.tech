import "./index.css";
import menu from "/src/assets/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBook } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useEffect } from "react";
function Navbar({ isSelectModeDark, onDarkMode }) {
  const [menuON, setMenuON] = useState(false);
  const [isStickyScroll, setStickyScroll] = useState("");

  useEffect(() => {
    onDarkMode();
  }, []);

  useEffect(() => {
    window.onscroll = function () {
      scrollVerify();
    };
    function scrollVerify() {
      if (window.scrollY >= 400) {
        setMenuON(false);
      }
      if (window.scrollY >= 200) {
        setStickyScroll("black-blur");
      } else {
        if (window.scrollY === 0) {
          setStickyScroll("");
        }
      }
    }
  }, []);

  const handlerClickMenu = (setMenuON) => {
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
          <h5 className="glitch-text font-semibold text-3xl uppercase">
            Zetflix
          </h5>
        </div>
        <div
          className={`${
            menuON
              ? "max-md:opacity-100"
              : "max-md:opacity-0 max-md:-translate-y-full"
          } right-0 transition-all flex flex-col md:flex-row gap-6 max-md:gap-8 items-center  max-md:absolute max-md:pt-14 top-0 max-md:bg-black fill-transparent rounded-md max-md:h-screen max-md:w-2/5`}
        >
          <div className="md:hidden">
            <h4 className="text-gray-50 text-3xl">Menu</h4>
          </div>
          <ul className="font-poppins max-md:self-start max-md:m-3 flex gap-4 flex-col md:flex-row">
            <li>
              <a
                className={`nav__menu-item ${
                  isStickyScroll === "black-blur" ? "text-white" : "text-black"
                } transition-all hover:border-b-4 font-bold max-md:text-gray-50 dark:text-gray-50`}
                href="#"
              >
                <FontAwesomeIcon icon={faBook} size="sm" /> Proyectos
              </a>
            </li>
            <li>
              <a
                className={`${
                  isStickyScroll === "black-blur" ? "text-white" : "text-black"
                } transition-all hover:border-b-4 font-bold max-md:text-gray-50 dark:text-gray-50`}
                href="#contacts"
              >
                <FontAwesomeIcon icon={faUsers} size="sm" /> Contactos
              </a>
            </li>
            <li>
              {/* <button
              aria-label="Modedark"
              className="w-2"
              type="button"
              onClick={() => onDarkMode()}
            >
              {isSelectModeDark === "light" ? (
                <i
                  className={`${
                    isStickyScroll === "black-blur"
                      ? "text-white"
                      : "text-black"
                  } fa-regular fa-moon fa-xl transition-all font-bold max-md:text-gray-50 dark:text-gray-50`}
                ></i>
              ) : (
                <i
                  className={`${
                    isStickyScroll === "black-blur"
                      ? "text-white"
                      : "text-black"
                  } fa-regular fa-moon fa-xl transition-all font-bold max-md:text-gray-50 dark:text-gray-50`}
                ></i>
              )}
            </button> */}
            </li>
          </ul>

          <div className="nav__social md:hidden">
            <ul className="flex gap-5 flex-wrap text-white">
              <li>
                <a
                  href="https://x.com/ElBrayanP21"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  href="https://github.com/brayanty"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/el-brayan-p-4b9210261/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
            </ul>
          </div>
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
