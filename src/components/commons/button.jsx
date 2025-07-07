export const renderButtons = (title, url, icon) => {
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