import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutMeImg from "../../assets/Main/Brand.jpg";
import "./index.css";

function AboutMe() {
  return (
    <section className="about mx-auto container flex flex-col-reverse items-center md:flex-row gap-3 mt-6 mb-6 max-md:p-4 py-10 w-full lg:max-w-4xl md:max-w-2xl">
      <header className="flex flex-col md:items-start gap-2">
        <h2 className="text-4xl font-primarybold tracking-tight text-gray-800 dark:text-white">
          <FontAwesomeIcon icon={faUser} size="xs" /> About Me
        </h2>
        <div className="text-xl text-gray-950 dark:text-gray-200">
          <p>
            
            Passionate about technology and understanding how it works. Currently developing my skills in web development, I bring a strong commitment, a proactive attitude, and a readiness to learn, take on new challenges, and add value from day one.
          </p>
          <br />
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
