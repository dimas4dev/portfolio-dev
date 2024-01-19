
import GitHubIcon from './icons/GitHub';
import NextJsIcon from './icons/NextJs';
import TailwindIcon from './icons/Tailwind';
import WordPressIcon from './icons/Wordpress';
import AzureIcon from './icons/Azure';
import NordicIcon from './icons/Nordic';
import AndesUIIcon from './icons/Andes';
import NuxtIcon from './icons/Nuxt';
import VuetifyIcon from './icons/Vuetify';
import ReactIcon from './icons/React';
import MaterialUIIcon from './icons/MaterialUI';
import LinkButton from './LinkButton';


const Projects = () => {
  const TAGS = {
    NEXT: {
      name: "Next.js",
      className: "bg-black text-white",
      icon: NextJsIcon,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      className: "bg-[#003159] text-white",
      icon: TailwindIcon,
    },
    WORDPRESS: {
      name: "WordPress",
      className: "bg-[#964120] text-white",
      icon: WordPressIcon,
    },
    AZURE: {
      name: "Azure DevOps",
      className: "bg-[#0078d7] text-white",
      icon: AzureIcon,
    },
    NORDIC: {
      name: "Nordic",
      className: "bg-[#0088cc] text-white",
      icon: NordicIcon,
    },
    ANDESUI: {
      name: "AndesUI",
      className: "bg-[#0088cc] text-white",
      icon: AndesUIIcon,
    },
    NUXT: {
      name: "Nuxt.js",
      className: "bg-black text-white",
      icon: NuxtIcon,
    },
    VUETIFY: {
      name: "Vuetify",
      className: "bg-[#1867c0] text-white",
      icon: VuetifyIcon,
    },
    REACT: {
      name: "React",
      className: "bg-black text-white",
      icon: ReactIcon,
    },
    MATERIALUI: {
      name: "Material UI",
      className: "bg-[#FF7F00] text-white",
      icon: MaterialUIIcon,
    },
  };

  const PROJECTS = [
    {
      title: "Mantenimiento de FaroPsicopedagogía",
      description:
        "Realicé el mantenimiento de una plataforma social en WordPress, desplegada en Azure DevOps. Mis responsabilidades incluían la actualización de contenido, la optimización de rendimiento y la gestión de la seguridad del sitio.",
      link: "https://faropsicopedagogia.org",
      image: "/projects/faro.webp",
      tags: [TAGS.WORDPRESS, TAGS.AZURE],
    },
    {
      title: "Testigos Electorales",
      description:
        "Desarrollé importantes funcionalidades de frontend para una aplicación de testigos electorales usando Nuxt y Vuetify. Este proyecto, desplegado en AWS, mejoró significativamente la interacción y el reporte de incidencias de los usuarios.",
      tags: [TAGS.NUXT, TAGS.VUETIFY],
    },
    {
      title: "Desarrollo Frontend en MercadoLibre",
      description:
        "Participé en el desarrollo completo del frontend para MercadoLibre utilizando el framework Nordic y la biblioteca de componentes AndesUI, contribuyendo a una experiencia de usuario más rica y accesible.",
      image: "/projects/SEOMeli.webp",
      tags: [TAGS.NORDIC, TAGS.ANDESUI],
    },
    {
      title: "Desarrollo de Trackeum",
      description:
        "En Trackeum, estuve a cargo del diseño y desarrollo de interfaces usando React y Material UI, logrando una experiencia de usuario intuitiva y eficiente. El producto fue desplegado en AWS, asegurando alta disponibilidad y escalabilidad.",
      link: "https://trackeum.ticsocial.com.co/",
      image: "/projects/trackeum.webp",
      tags: [TAGS.REACT, TAGS.MATERIALUI],
    },
  ];

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
                Ver código fuente
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