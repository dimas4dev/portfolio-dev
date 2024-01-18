const LinkButton = ({ href, children }) => {
  return (
    <a
      href={href}
      className="bg-white/5 border dark:border-white/10 border-gray-300 rounded-full inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10"
    >
      {children}
    </a>
  );
};

export default LinkButton;