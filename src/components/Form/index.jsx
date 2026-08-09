import { useEffect, useState } from "react";
import "./index.css";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [disableInput, setDisableInput] = useState(false);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email) && name.length >= 3 && name.length <= 15) {
      setDisableInput(true);
      return;
    }
    setDisableInput(false);
  }, [email, setEmail, name, setName]);

  return (
    <section
      id="contacts"
      className="contacts container m-0-auto pt-6 pb-6 flex flex-col gap-3 items-center text-slate-950 dark:text-white bg-transparent transition-colors backdrop-blur-sm mb-5 rounded-lg border border-gray-400 shadow-slate-500 dark:shadow-gray-300 shadow-md w-full max-w-md"
    >
      <h4 className="font-primarybold text-2xl">Contact Form</h4>
      <form
        action="https://formspree.io/f/xpzgbgqz"
        method="POST"
        className="flex flex-col gap-5 items-center z-30"
      >
        <div>
          <label htmlFor="message" className="font-primarybold">
            Name:
            <input
              type="text"
              name="message"
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              id="message"
              required
              placeholder="Jose Guerrero"
              className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
        </div>
        <div>
          <label htmlFor="email" className="font-primarybold ">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              id="email"
              autoComplete="email"
              required
              placeholder="tuemail@email.com"
              className="mt-1 block w-full p-2 text-black border border-gray-500 dark:border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
        </div>
        <input
          disabled={disableInput}
          className="px-10 pt-2 pb-2 transition-all ease-in-out duration-300 dark:hover:bg-slate-500 dark:hover:text-black hover:bg-slate-200 rounded-md dark:bg-gray-700 text-gray-950 dark:text-white border border-slate-900 dark:border-white font-primaryMedium"
          type="submit"
        />
      </form>
    </section>
  );
}

export default Form;
