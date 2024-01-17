import {ExperienceItem} from './ExperiencieItem';

const EXPERIENCIE = [
  {
    date: "Actualmente...",
    title: "Creador de Contenido − Twitch",
    description: "Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
    link: "https://twitch.tv/midudev",
  },
  {
    date: "Septiembre 2022",
    title: "Principal Frontend Engineer  − Adevinta Spain",
    description: "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
  },
];

export const Experiencie = () => {
  return (
    <ol className="relative border-s border-gray-200 ml-3">
      {EXPERIENCIE.map((experience, index) => (
        <li key={index} className="mb-10 ms-4">
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
};
