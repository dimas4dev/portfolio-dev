import { useState } from 'react';
import ExperienceItem from './ExperiencieItem';
import { useStore } from '@/Database/store';
import { languageDatabase } from '@/i18n/language';





const Experiencie = () => {
  const languageStore = useStore(state => state.language);
  
  const languageFile = languageStore === "es" ? languageDatabase.es : languageDatabase.en;



  return (
    <ol className="relative border-s border-gray-200 ml-3">
      {languageFile.experiencie.map((experience, index) => (
        <li key={index} className="mb-10 ms-4">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default Experiencie;