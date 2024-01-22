import Translate from "@/components/Translation"
import { languageDatabase } from "@/i18n/language"
import { useStore } from '@/Database/store';


const Footer = () => {
    const currentYear = new Date().getFullYear()
    const languageStore = useStore(state => state.language);

    const languageFile = languageStore === "es" ? languageDatabase.es : languageDatabase.en;


    return (
        <footer
            className="rounded-lg shadow m-4 bg-black/5 dark:bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm sm:text-center text-yellow-800/90 dark:text-yellow-200/90">© {currentYear} <a href="https://www.dimas4dev.com/" className="hover:underline">{<Translate translationKey="dimas4dev"/>}</a>. {<Translate translationKey="rights"/>}</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
                    <li>
                        <a href="/#sobre-mi" className="hover:underline me-4 md:me-6">{<Translate translationKey="aboutMeLabel" />}</a>
                    </li>
                    <li>
                        <a href="/#presentation" className="hover:underline">{<Translate translationKey="contactLabel"/>}</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer