import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import AboutMeImg from "../../assets/Main/Brand.jpg";

function AboutMe() {
  return (
    <section className="mx-auto container flex flex-col-reverse items-center md:flex-row gap-3 mt-6 mb-6 max-md:p-4 py-10 w-full lg:max-w-4xl md:max-w-2xl">
      <header className="flex flex-col md:items-start gap-1">
        <h4 className="text-4xl font-primarybold tracking-tight text-gray-800 dark:text-white">
          <FontAwesomeIcon icon={faUser} size="xs" /> Sobre mi
        </h4>
        <div className="text-xl text-gray-800 dark:text-gray-200">
          <p>
            Soy un apasionado por la tecnología, desde muy pequeño me ha llamado
            la ateción las computadoras, y el como funcionamiento de los
            programas en las mismas.
          </p>
          <br />
          <p>
            Actualmente no tengo experiencia en la industria laboral pero estoy
            profundamente conprometido al dar el 101% en cada cosa que haga, y
            asi conseguir un perfil mas profesional en esta industria.
          </p>
        </div>
      </header>
      <img
        width={200}
        height={200}
        className="w-72 md:w-64 h-full md:rotate-2"
        src={AboutMeImg}
        alt="imagene de Brayan Palacios"
      />
    </section>
  );
}

export default AboutMe;
