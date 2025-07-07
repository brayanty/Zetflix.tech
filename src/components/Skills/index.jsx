import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <section className="skills mx-auto container flex flex-col-reverse items-center md:flex-row gap-3 mt-6 mb-6 max-md:p-4 py-10 w-full lg:max-w-4xl md:max-w-2xl">
      <div className="flex flex-col justify-center items-center gap-6 ">
        <header className="self-start">
          <h4 className="text-4xl font-primarybold text-black text-white  self-start ">
            <FontAwesomeIcon icon={faKitchenSet} size="xs" /> Skills
          </h4>
        </header>
        <div className="flex justify-center items-center gap-3 p-4">
          <a
            className="p-1 rounded bg-gray bg-white"
            href="https://getbootstrap.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-blue-200"
            href="https://www.w3schools.com/cpp/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
              alt="cplusplus"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-blue-200"
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-white"
            href="https://expressjs.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/express-js.png"
              alt="express"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-orange-200"
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-orange-200"
            href="https://www.w3.org/html/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-gray-300"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-amber-200"
            href="https://www.linux.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="linux"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-green-200"
            href="https://nodejs.org"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-black/30"
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-slate-800"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
              width="40"
              height="40"
            />
          </a>
          <a
            className="p-1 rounded bg-gray bg-white"
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width="40"
              height="40"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
