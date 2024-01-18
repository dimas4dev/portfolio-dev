const Header = () => {
    return (
        <header className='flex justify-center items-center mx-auto py-5 sticky top-0 w-full xl:w-[1120px] z-10'>
            <nav
                className={`border border-black rounded-full px-3 py-1 flex flex-row items-center bg-neutral-200 dark:bg-black/50 backdrop-blur-2xl`}
            >
                <a
                    className="hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
                    href="/#experiencia">Experiencia</a>
                <a
                    className="hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
                    href="/#proyectos">Proyectos</a>
                <a
                    className="hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
                    href="/#sobre-mi">Sobre mí</a>
                <a
                    className="hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
                    href="/#contacto">Contacto</a>
            </nav>
        </header>
    );
};

export default Header;