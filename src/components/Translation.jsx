import { languageDatabase } from '@/i18n/language';
import { useStore } from '@/Database/store';


const Translate = ({ translationKey }) => {
    const languageStore = useStore(state => state.language);
    const translations = languageDatabase[languageStore] || languageDatabase.es; // Default to Spanish if languageKey is not found
    const translation = translations[translationKey] || `No translation found for ${translationKey}`;
    return (
        <span>{translation}</span>
    );
};

export default Translate;