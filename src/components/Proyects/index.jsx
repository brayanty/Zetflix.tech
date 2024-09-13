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
import imagenDrMorse from "../../assets/portfolio/DrMorse.webp";

function Proyects() {
  const renderButtons = (title, url, icon) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex bg-gray-100 text-gray-950 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition  dark:text-white dark:bg-gray-700 border border-slate-800 dark:border-slate-300 focus-visible:ring-yellow-500/80 text-md hover:bg-slate-800 dark:hover:bg-slate-300 max-w-fit rounded-xl hover:text-zinc-200 dark:hover:text-black focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
      >
        <FontAwesomeIcon icon={icon} /> {title}
      </a>
    );
  };

  return (
    <section className="container mx-auto p-4 items-center flex gap-8 flex-col flex-wrap ">
      <div id="Proyects" className="flex flex-col gap-6">
        <h4 className="text-4xl font-primarybold text-black dark:text-white  self-start ">
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
                <ul className="flex flex-row gap-3 text-black dark:text-white font-primaryMedium ">
                  <li className="p-1">
                    <FontAwesomeIcon icon={faHtml5} size="lg" />
                  </li>
                  <li className="p-1">
                    <FontAwesomeIcon icon={faCss3} size="lg" />
                  </li>
                  <li className="p-1">
                    <FontAwesomeIcon icon={faJs} size="lg" className="" />
                  </li>
                </ul>
              </div>
              <p className="text-base text-wrap font-primaryMedium text-slate-950 dark:text-slate-200">
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
              src={imagenDrMorse}
              alt="Galeria de imagenes, en cual tenia como finalidad en aprendizaje de CSS GRID"
            />
          </figure>
          <header className="flex w-full gap-2 flex-col justify-around justify-self-end">
            <div className="flex flex-col gap-2">
              <h4 className="text-3xl text-black dark:text-white font-primarybold">
                Dr. Morse
              </h4>
              <div>
                <ul className="flex flex-row gap-3 text-black dark:text-white font-primaryMedium">
                  <li className="px-1">
                    <FontAwesomeIcon
                      icon={faReact}
                      size="xl"
                      alt="logo de react"
                    />
                  </li>
                  <li className="px-1">
                    <TailwindCSSLogo
                      width="24px"
                      height="24px"
                      alt="logo de tailwindcss"
                      className="inline-block fill-black dark:fill-white"
                    />
                  </li>
                </ul>
              </div>
              <p className="text-base text-wrap font-primaryMedium text-gray-950 dark:text-slate-200">
                {`Pagina para un centro de salud "no existe", que tuvo como finalidad mejorar
                mis habilidades en React y Tailwind CSS`}
              </p>
            </div>
            <div className="flex gap-2">
              {renderButtons(
                "Ver código",
                "https://github.com/brayanty/DrMorse ",
                faGithub
              )}
              {renderButtons(
                "Ver página",
                "https://dr-morse.vercel.app/",
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
