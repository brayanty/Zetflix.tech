import { useEffect, useRef } from "react";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillLinks } from "./constSkills.js";

function Skills() {


  return (
    <section  className="skills mx-auto container flex flex-col-reverse items-center md:flex-row gap-3 mt-6 mb-6 max-md:p-4 py-10 w-full lg:max-w-4xl md:max-w-2xl">
      <div className="flex flex-col justify-center items-center gap-6 ">
        <header className="self-start">
          <h4 className="text-4xl font-primarybold text-white  self-start ">
            <FontAwesomeIcon icon={faKitchenSet} size="xs" /> Skills
          </h4>
        </header>
        <div className="flex justify-center items-center flex-wrap gap-3 p-4">
          {skillLinks.map((skill) => (
            <a
              key={skill.alt}
              className={skill.className + "item hover:scale-125 transition-transform hover:shadow-lg hover:shadow-gray-500/50 dark:hover:shadow-gray-300/50"}
              href={skill.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={skill.icon}
                alt={skill.alt}
                width="40"
                height="40"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
