import { useState } from "react";
import Badge from "./Badge";
import SpanishFlag from "./icons/SpanishFlag";
import EnglishFlag from "./icons/EnglishFlag";

import { useStore } from '@/Database/store';
import {  languageDatabase } from "@/i18n/language"


const Header = () => {
    const languageStore = useStore(state => state.language);
    const updateLanguage = useStore(state => state.updateLanguage);
    const [menuVisible, setMenuVisible] = useState(false);
    const [language, setLanguage] = useState(languageStore);

    const languageFile = language === "es" ? languageDatabase.es : languageDatabase.en;
    const IconFlag = language === "es" ? SpanishFlag : EnglishFlag;
    const TextFlag = language === "es" ? "Español" : "English";

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const changeLanguage = (lang) => {
        updateLanguage(lang);
        setLanguage(lang);
        setMenuVisible(false);
    };

    return (
        <header className='flex justify-center items-center mx-auto py-5 sticky top-0 w-full xl:w-[1120px] z-10'>
            <nav
                className={`border border-black rounded-full px-3 py-1 flex flex-row items-center bg-neutral-200 dark:bg-black/50 backdrop-blur-2xl`}
            >
                <a
                    className="hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
                    href="/#experiencia">{languageFile.experienceLabel}</a>
                <a
                    className="hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
                    href="/#proyectos">{languageFile.projectsLabel}</a>
                <a
                    className="hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
                    href="/#sobre-mi">{languageFile.aboutMeLabel}</a>
                <a
                    className="hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
                    href="/#presentation">{languageFile.contactLabel}</a>
                <div className="relative" onClick={toggleMenu}>
                    <Badge backgroundColor="bg-blue-200">
                        <IconFlag style={{ width: "32px", height: "32px" }} />
                        <span className="px-2">{TextFlag}</span>
                    </Badge>
                    {menuVisible && (
                        <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                            <a
                                href="#"
                                className="flex px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                                onClick={() => changeLanguage('en')}
                            >
                                <EnglishFlag style={{ width: "20px", height: "20px" }} />
                                <span className="px-2">English</span>
                            </a>
                            <a
                                href="#"
                                className="flex px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                                onClick={() => changeLanguage('es')}
                            >
                                <SpanishFlag style={{ width: "20px", height: "20px" }} />
                                <span className="px-2">Español</span>
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;

