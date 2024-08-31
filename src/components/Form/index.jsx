import "./index.css";

function Form() {
  return (
    <div
      id="contacts"
      className="container m-0-auto pt-6 pb-6 flex flex-col gap-3 items-center text-white  bg-transparent transition-colors backdrop-blur-sm hover:bg-slate-800 mb-5 rounded-lg border border-gray-400 shadow-lg w-full max-w-md"
    >
      <h4 className="font-primarybold text-2xl ">Formulario de Contacto</h4>
      <form
        action="https://formspree.io/f/xpzgbgqz"
        method="POST"
        className="flex flex-col gap-5 items-center z-30"
      >
        <div>
          <label htmlFor="message" className="font-primarybold">
            Nombre:
          </label>
          <input
            type="text"
            name="message"
            id="message"
            required
            placeholder="Jose Guerrero"
            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-primarybold">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="tuemail@email.com"
            className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <input
          className="px-10 pt-2 pb-2 rounded-md transition-colors dark:bg-gray-700  text-white border font-semibold hover:font-bold dark:hover:bg-green-500 "
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
