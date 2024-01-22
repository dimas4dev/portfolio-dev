import NextJsIcon from '@/components/icons/NextJs';
import TailwindIcon from '@/components/icons/Tailwind';
import WordPressIcon from '@/components/icons/Wordpress';
import AzureIcon from '@/components/icons/Azure';
import NordicIcon from '@/components/icons/Nordic';
import AndesUIIcon from '@/components/icons/Andes';
import NuxtIcon from '@/components/icons/Nuxt';
import VuetifyIcon from '@/components/icons/Vuetify';
import ReactIcon from '@/components/icons/React';
import MaterialUIIcon from '@/components/icons/MaterialUI';
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

export const languageDatabase = {
  "es": {
    "title": "Porfolio de dimas4dev - Desarrollador y Programador Web",
    "description": "Elige a Dimas4Dev para el desarrollo innovador de tus proyectos web y móviles. Experto en Desarrollo Web y Diseño de Experiencia de Usuario, enfocado en entregar soluciones digitales personalizadas y creativas.",
    "presentationHeading": "¡Hola!, soy Dimas4Dev",
    "yearsExperiencie": "Alrededor de 7 años de experiencia en tecnología y 3.5 años especializándome en desarrollo web,",
    "occupation": "ofrezco soluciones innovadoras y personalizadas.",
    "location": "Radicado en Bogotá, Colombia,",
    "proposal": "me dedico a crear aplicaciones web únicas y aportar contenido valioso en el campo del desarrollo tecnológico.",
    "availableToWork": "Disponible para trabajar",
    "experienceSectionTitle": "Experiencia laboral",
    "projectsSectionTitle": "Proyectos",
    "aboutMeSectionTitle": "Sobre mí",
    "contactEmail": "me@dimas4dev.com",
    "experiencie": [
      {
        "date": "Actualmente...",
        "title": "Desarrollador Frontend - LinkTIC",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Encargado del desarrollo de una solución integral para testigos y delegados electorales, facilitando la interacción, reporte de incidencias y comunicación eficiente. Implementación de una interfaz web con VueJS y Vuetify, y desarrollo de una aplicación móvil con React y Capacitor. Gestión de backend y servicios en AWS."
      },
      {
        "date": "Julio de 2022 - Mayo de 2023 (11 meses)",
        "title": "Ingeniero de Software - Mercado Libre",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Especializado en el frontend para Mercado Shops utilizando Nordic framework. Realización de maquetación de productos, pruebas de componentes con JEST y proyectos en backend con Go. Colaboración en equipo para integración y resolución de problemas técnicos."
      },
      {
        "date": "Febrero de 2022 - Julio de 2022 (6 meses)",
        "title": "Desarrollador Web Frontend ReactJS - TICSOCIAL",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Responsable del proyecto de optimización de aplicación usando webpack, diseño de interfaces de usuario y colaboración interdisciplinaria para mejorar la experiencia del usuario final."
      },
      {
        "date": "Junio de 2021 - Septiembre de 2021 (4 meses)",
        "title": "Desarrollador Front End ReactJs - ITGlobers",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Trabajé con el Framework de VTEX, especializándome en integración de APIs y diseño de interfaces de usuario, con enfoque en la funcionalidad y la integración de sistemas."
      },
      {
        "date": "Octubre de 2018 - Mayo de 2021 (2 años 8 meses)",
        "title": "Desarrollador BPM/SOA - CORUS Consulting",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Operador de operaciones y conservación de sistemas Linux, enfocado en la disponibilidad, estabilidad y seguridad de los servidores Linux, incluyendo su administración y optimización."
      },
      {
        "date": "Febrero de 2018 - Agosto de 2018 (7 meses)",
        "title": "Desarrollador Fullstack - Este es mi bus",
        "location": "Bogotá D.C., Colombia",
        "description": "Encargado del diseño, creación y despliegue de una plataforma para cálculos entre paradas de autobús. Responsable del diseño visual, base de datos y lógica de backend, utilizando PHP."
      }
    ],
    "language": "Español",
    "experienceLabel": "Experiencia",
    "projectsLabel": "Proyectos",
    "aboutMeLabel": "Sobre mí",
    "contactLabel": "Contacto",
    "spanishLabel": "Español",
    "projects": [
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
    ],
    "sourceCode": "Ver código fuente",
    "aboutMeName":"Me llamo Dimas Mendoza, ",
    "webDeveloper" : "soy Desarrollador Web,",
    "aboutMeTime" : " he trabajado durante varios años en la tecnología, he aprovechado mi talento para trabajar en diferentes proyectos, pero ahora deseo",
    "aboutMeProposal":" construir software que ayude a las personas.",
    "aboutMeProposal0" : " para poder usar lo aprendido y ",
    "aboutMeProposal01" : "Uno de mis objetivos es",
    "aboutMeObjective02": "aprender de la mano de los mejores, ",
    "aboutMeObjective03": "Para poder",
    "aboutMeObjective04": "ayudar a personas que no tienen acceso a este tipo de conocimiento.",
    "aboutMeObjective05": "Este conocimiento es indispensable compartirlo y deseo",
    "aboutMeObjective06": "transmitirlo a través de un blog,",
    "aboutMeObjective07": "pero este no se lograra escribiendo de la manera regular, sino a través de",    
    "aboutMeObjective08": "historias que puedan facilitar el aprendizaje.",
    "aboutMeObjective09": "Esta es una parte de mi,si quieres saber mas de mi contactame y charlemos. Te dejo un formulario para que me escribas.",
  },
  "en": {
    "title": "Dimas4Dev's Portfolio - Web Developer and Programmer",
    "description": "Choose Dimas4Dev for innovative development of your web and mobile projects. Expert in Web Development and User Experience Design, focused on delivering personalized and creative digital solutions.",
    "presentationHeading": "Hello, I'm Dimas4Dev",
    "presentationSubheading": "With over 7 years of experience in technology and 3.5 years specializing in web development, I offer innovative and customized solutions. Based in Bogotá, Colombia, I am dedicated to creating unique web applications and contributing valuable content in the field of technological development.",
    "availableToWork": "Available to Work",
    "experienceSectionTitle": "Work Experience",
    "projectsSectionTitle": "Projects",
    "aboutMeSectionTitle": "About Me",
    "contactEmail": "me@dimas4dev.com",
    "experiencie": [
      {
        "date": "Currently...",
        "title": "Frontend Developer - LinkTIC",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "In charge of developing a comprehensive solution for electoral witnesses and delegates, facilitating interaction, incident reporting, and efficient communication. Implementation of a web interface with VueJS and Vuetify, and development of a mobile application with React and Capacitor. Management of backend and services on AWS."
      },
      {
        "date": "July 2022 - May 2023 (11 months)",
        "title": "Software Engineer - Mercado Libre",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Specialized in frontend for Mercado Shops using the Nordic framework. Carried out product layout, component testing with JEST, and backend projects using Go. Collaborated with the team for integration and quick and efficient resolution of technical issues."
      },
      {
        "date": "February 2022 - July 2022 (6 months)",
        "title": "Frontend Web Developer ReactJS - TICSOCIAL",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Responsible for optimizing the application using webpack, designing high-quality user interfaces, and close collaboration with other teams to ensure excellence in the end-user experience."
      },
      {
        "date": "June 2021 - September 2021 (4 months)",
        "title": "Front End Developer ReactJs - ITGlobers",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Worked with the VTEX Framework, specializing in API integration and user interface design, focusing on functionality and system integration."
      },
      {
        "date": "October 2018 - May 2021 (2 years 8 months)",
        "title": "BPM/SOA Developer - CORUS Consulting",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Operations operator and conservation of Linux systems, focused on the availability, stability, and security of Linux servers, including their efficient administration and optimization."
      },
      {
        "date": "February 2018 - August 2018 (7 months)",
        "title": "Fullstack Developer - This is my bus",
        "location": "Bogotá D.C., Colombia",
        "description": "In charge of designing, creating, and deploying a platform for calculations between bus stops. Responsible for the visual design, database, and backend logic, using PHP."
      }
    ],
    "language": "English",
    "experienceLabel": "Experience",
    "projectsLabel": "Projects",
    "aboutMeLabel": "About Me",
    "contactLabel": "Contact",
    "englishLabel": "English",
  }

}
