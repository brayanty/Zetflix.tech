import "./index.css";
import {
  faHtml5,
  faCss3,
  faJs,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TailwindCSSLogo from "../svgsComponets";
import imagenGalery from "../../assets/portfolio/galeria.webp";
import imagenAdministrarYA from "../../assets/portfolio/AdministraYA.webp";

function Proyects() {
  const renderButtons = (title, url, icon) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-700 border dark:border-slate-300 focus-visible:ring-yellow-500/80 text-md dark:hover:bg-slate-300 max-w-fit rounded-xl dark:hover:text-black focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
      >
        <FontAwesomeIcon icon={icon} /> {title}
      </a>
    );
  };

  return (
    <section
      id="Portfolio"
      className="container mx-auto p-4 items-center flex gap-8 flex-col flex-wrap "
    >
      <div id="projects" className="flex flex-col gap-6">
        <h4 className="text-4xl font-primarybold text-white  self-start ">
          <FontAwesomeIcon icon={faCode} size="xs" /> Proyectos
        </h4>

        <article className="grid grid-cols-2 max-md:grid-cols-1 gap-4 max-md:gap-5 rounded-md min-w-52 lg:max-w-4xl md:max-w-2xl transition-transform overflow-hidden ">
          <figure className="h-56 transition duration-500 ease-in-out overflow-clip rounded-xl sm:rounded-xl lg:border lg:border-fuchsia-500 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
            <img
              className="h-full w-full ease-in-out duration-500 transition-transform hover:scale-105 "
              src={imagenGalery}
              alt="Galeria de imagenes, en cual tenia como finalidad en aprendizaje de CSS GRID"
            />
          </figure>
          <header className="flex w-full gap-2 flex-col justify-around justify-self-end">
            <div className="flex flex-col gap-2">
              <h4 className="text-3xl font-primarybold text-black dark:text-white ">
                Galeria
              </h4>
              <div>
                <ul className="flex flex-row gap-3 text-black dark:text-white ">
                  <li className="px-1 border transition-colors ease-in-out duration-300 border-zinc-500 hover:bg-black rounded-md">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      size="lg"
                      style={{ color: "#eb6c05" }}
                    />{" "}
                    <span>HTML5</span>
                  </li>
                  <li className="px-1 transition-colors ease-in-out duration-300 border  border-zinc-500 hover:bg-black rounded-md">
                    <FontAwesomeIcon
                      icon={faCss3}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />{" "}
                    <span>CSS3</span>
                  </li>
                  <li className="px-1 transition-colors ease-in-out duration-300 border  border-zinc-500 hover:bg-black rounded-md">
                    <FontAwesomeIcon
                      icon={faJs}
                      size="lg"
                      style={{ color: "#FFD43B" }}
                    />{" "}
                    <span>Javascript</span>
                  </li>
                </ul>
              </div>
              <p className="text-base text-wrap font-primaryRegular text-slate-200">
                Galeria de imagenes, el cual tenia como finalidad en aprendizaje
                de CSS GRID
              </p>
            </div>
            <div className="flex gap-2">
              {renderButtons(
                "Ver código",
                "https://github.com/brayanty/Galeria",
                faGithub
              )}
              {renderButtons(
                "Ver página",
                "https://brayanty.github.io/Galeria/",
                faMagnifyingGlass
              )}
            </div>
          </header>
        </article>
        <article className="grid grid-cols-2 max-md:grid-cols-1 gap-4 max-md:gap-5 rounded-md min-w-52 lg:max-w-4xl md:max-w-2xl transition-transform overflow-hidden ">
          <figure className="h-56 transition duration-500 ease-in-out overflow-clip rounded-xl sm:rounded-xl lg:border lg:border-fuchsia-500 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
            <img
              className="h-full w-full ease-in-out duration-500 transition-transform hover:scale-105 "
              src={imagenAdministrarYA}
              alt="Galeria de imagenes, en cual tenia como finalidad en aprendizaje de CSS GRID"
            />
          </figure>
          <header className="flex w-full gap-2 flex-col justify-around justify-self-end">
            <div className="flex flex-col gap-2">
              <h4 className="text-3xl text-black dark:text-white font-primarybold">
                AdministraYa
              </h4>
              <div>
                <ul className="flex flex-row gap-3 text-black dark:text-white ">
                  <li className="px-1 transition-colors ease-in-out duration-300 border border-zinc-500 hover:bg-black rounded-md">
                    <FontAwesomeIcon
                      icon={faReact}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                      alt="logo de react"
                    />{" "}
                    <span>React</span>
                  </li>
                  <li className="px-1 transition-colors ease-in-out duration-300 border border-zinc-500 hover:bg-black rounded-md">
                    <TailwindCSSLogo
                      width="20px"
                      height="20px"
                      alt="logo de tailwindcss"
                      className="inline-block"
                    />{" "}
                    <span>TailwindCSS</span>
                  </li>
                </ul>
              </div>
              <p className="text-base text-wrap font-primaryRegular text-slate-200">
                Inventario de venta sencillo, que tuvo como finalidad mejorar
                mis habilidades en React y Tailwind CSS
              </p>
            </div>
            <div className="flex gap-2">
              {renderButtons(
                "Ver código",
                "https://github.com/brayanty/Administra-Ya",
                faGithub
              )}
              {renderButtons(
                "Ver página",
                "https://administra-ya.vercel.app/",
                faMagnifyingGlass
              )}
            </div>
          </header>
        </article>
      </div>
    </section>
  );
}

export default Proyects;
