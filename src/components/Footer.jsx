const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer
            className="rounded-lg shadow m-4 bg-black/5 dark:bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center text-yellow-800/90 dark:text-yellow-200/90">© {currentYear} <a href="https://midu.dev/" className="hover:underline">midudev</a>. Casi todos los derechos reservados</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Sobre mí</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contacto</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer