
import GitHubIcon from './icons/GitHub';
import LinkButton from './LinkButton';

import {  languageDatabase } from "@/i18n/language"
import { useStore } from '@/Database/store';
import Translate from './Translation';


const Projects = () => {

  const languageStore = useStore(state => state.language);
  const languageFile = languageStore === "es" ? languageDatabase.es : languageDatabase.en;


  return (
    <section className="flex flex-col gap-y-16">
      {languageFile.projects.map(({ image, title, description, tags, link, github }, index) => (
        <article key={index}>
          <h3 className="text-2xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">{title}</h3>
          <p className="text-lg mb-4 text-pretty">{description}</p>
          <ul className="flex gap-x-2 flex-row mb-2">
            {tags.map((tag, tagIndex) => {
              const TagIcon = tag.icon;
              return (
                <li key={tagIndex}>
                  <span className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2`}>
                    <TagIcon className="size-4" />
                    {tag.name}
                  </span>
                </li>
              );
            })}
          </ul>
          {image && (
            <img
              loading="lazy"
              className="rounded shadow-2xl shadow-white/10 aspect-video"
              src={image}
              alt={`Captura de pantalla del proyecto ${title}`}
            />
          )}
          <footer className="flex gap-x-4 items-end justify-start mt-4">
            {github && (
              <LinkButton href={github}>
                <GitHubIcon className="size-6" />
                <Translate translationKey="sourceCode" />
              </LinkButton>
            )}
            {link && (
              <LinkButton href={link}>Ir al sitio web</LinkButton>
            )}
          </footer>
        </article>
      ))}
    </section>
  );
};

export default Projects;