import GitHub from './icons/GitHub';
import NextJS from './icons/NextJS';
import Tailwind from './icons/Tailwind';
import LinkButton from './LinkButton';

export const Projects = () => {
    const TAGS = {
        NEXT: {
          name: "Next.js",
          class: "bg-black text-white",
          icon: NextJS,
        },
        TAILWIND: {
          name: "Tailwind CSS",
          class: "bg-[#003159] text-white",
          icon: Tailwind,
        },
      };
      
      const PROJECTS = [
          {
            title: "SVGL - A beautiful library with SVG logos",
            description:
              "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
            link: "https://svgl.vercel.app/",
            github: "https://github.com/pheralb/svgl",
            image: "/projects/svgl.webp",
            tags: [TAGS.NEXT, TAGS.TAILWIND],
          },
          {
            title: "AdventJS - Retos de programación con JavaScript y TypeScript",
            description:
              "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS",
            link: "https://adventjs.dev",
            image: "/projects/adventjs.webp",
            tags: [TAGS.NEXT, TAGS.TAILWIND],
          },
        ]
      
  return (
    <section className="flex flex-col gap-y-16">
      {PROJECTS.map(({ image, title, description, tags, link, github }, index) => (
        <article key={index}>
          <h3 className="text-2xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">{title}</h3>
          <p className="text-lg mb-4 text-pretty">{description}</p>
          <ul className="flex gap-x-2 flex-row mb-2">
            {tags.map((tag, tagIndex) => {
              const TagIcon = tag.icon;
              return (
                <li key={tagIndex}>
                  <span className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}>
                    <TagIcon className="size-4" />
                    {tag.name}
                  </span>
                </li>
              );
            })}
          </ul>
          <img
            loading="lazy"
            className="rounded shadow-2xl shadow-white/10 aspect-video"
            src={image}
            alt={`Captura de pantalla del proyecto ${title}`}
          />
          <footer className="flex gap-x-4 items-end justify-start mt-4">
            {github && (
              <LinkButton href={github}>
                <GitHub className="size-6" />
                Ver código fuente
              </LinkButton>
            )}
            <LinkButton href={link}>Ir al sitio web</LinkButton>
          </footer>
        </article>
      ))}
    </section>
  );
};
