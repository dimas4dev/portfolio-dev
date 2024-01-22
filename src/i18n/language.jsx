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
        "description": "Encargado del desarrollo de una solución integral para testigos y delegados electorales, facilitando la interacción, reporte de incidencias y comunicación eficiente. Implementación de una interfaz web con VueJS y Vuetify, y desarrollo de una aplicación móvil con React y Capacitor."
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
    "aboutMeObjective09": "Esta es una parte de mi,si quieres saber mas de mi contactame y charlemos.",
    "dimas4dev":"dimas4dev",
    "rights":"Casi todos los derechos reservados"
  },
  "en":{
    "title": "Dimas4Dev's Portfolio - Web Developer and Programmer",
    "description": "Choose Dimas4Dev for the innovative development of your web and mobile projects. An expert in Web Development and User Experience Design, focused on delivering personalized and creative digital solutions.",
    "presentationHeading": "Hello, I'm Dimas4Dev",
    "yearsExperiencie": "With around 7 years of experience in technology and 3.5 years specializing in web development,",
    "occupation": "I offer innovative and customized solutions.",
    "location": "Based in Bogotá, Colombia,",
    "proposal": "I am dedicated to creating unique web applications and contributing valuable content in the field of technological development.",
    "availableToWork": "Available to Work",
    "experienceSectionTitle": "Work Experience",
    "projectsSectionTitle": "Projects",
    "aboutMeSectionTitle": "About Me",
    "contactEmail": "me@dimas4dev.com",
    "experience": [
      {
        "date": "Currently...",
        "title": "Frontend Developer - LinkTIC",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "In charge of developing a comprehensive solution for electoral witnesses and delegates, facilitating interaction, incident reporting, and efficient communication. Implemented a web interface with VueJS and Vuetify, and developed a mobile application with React and Capacitor. Managed backend and services on AWS."
      },
      {
        "date": "July 2022 - May 2023 (11 months)",
        "title": "Software Engineer - Mercado Libre",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Specialized in the frontend for Mercado Shops using the Nordic framework. Performed product layout, component testing with JEST, and backend projects using Go. Collaborated with the team for integration and technical problem resolution."
      },
      {
        "date": "February 2022 - July 2022 (6 months)",
        "title": "Web Frontend Developer ReactJS - TICSOCIAL",
        "location": "Bogotá, Distrito Capital, Colombia",
        "description": "Responsible for optimizing the application using webpack, designing user interfaces, and interdisciplinary collaboration to enhance the end-user experience."
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
        "description": "Operations and maintenance operator for Linux systems, focused on the availability, stability, and security of Linux servers, including their administration and optimization."
      },
      {
        "date": "February 2018 - August 2018 (7 months)",
        "title": "Fullstack Developer - This is my bus",
        "location": "Bogotá D.C., Colombia",
        "description": "Responsible for designing, creating, and deploying a platform for calculations between bus stops. Accountable for the visual design, database, and backend logic, using PHP."
      }
    ],
    "language": "Spanish",
    "experienceLabel": "Experience",
    "projectsLabel": "Projects",
    "aboutMeLabel": "About Me",
    "contactLabel": "Contact",
    "spanishLabel": "Spanish",
    "experiencie": [
      {
          "date": "Currently...",
          "title": "Frontend Developer - LinkTIC",
          "location": "Bogotá, Distrito Capital, Colombia",
          "description": "Responsible for developing a comprehensive solution for electoral witnesses and delegates, facilitating interaction, incident reporting, and efficient communication. Implemented a web interface with VueJS and Vuetify, and developed a mobile application with React and Capacitor. Managed backend and services on AWS."
      },
      {
          "date": "July 2022 - May 2023 (11 months)",
          "title": "Software Engineer - Mercado Libre",
          "location": "Bogotá, Distrito Capital, Colombia",
          "description": "Specialized in the frontend for Mercado Shops using the Nordic framework. Conducted product layout, component testing with JEST, and backend projects using Go. Collaborated with the team for integration and resolution of technical problems."
      },
      {
          "date": "February 2022 - July 2022 (6 months)",
          "title": "Web Frontend Developer ReactJS - TICSOCIAL",
          "location": "Bogotá, Distrito Capital, Colombia",
          "description": "Responsible for the project of optimizing the application using webpack, designing user interfaces, and interdisciplinary collaboration to improve the end-user experience."
      },
      {
          "date": "June 2021 - September 2021 (4 months)",
          "title": "Front End Developer ReactJs - ITGlobers",
          "location": "Bogotá, Distrito Capital, Colombia",
          "description": "Worked with the VTEX Framework, specializing in API integration and user interface design, with a focus on functionality and system integration."
      },
      {
          "date": "October 2018 - May 2021 (2 years 8 months)",
          "title": "BPM/SOA Developer - CORUS Consulting",
          "location": "Bogotá, Distrito Capital, Colombia",
          "description": "Operations operator and conservation of Linux systems, focused on the availability, stability, and security of Linux servers, including their administration and optimization."
      },
      {
          "date": "February 2018 - August 2018 (7 months)",
          "title": "Fullstack Developer - This is my bus",
          "location": "Bogotá D.C., Colombia",
          "description": "In charge of the design, creation, and deployment of a platform for calculations between bus stops. Responsible for the visual design, database, and backend logic, using PHP."
      }
  ],
  
    "projects": [
      {
        "title": "FaroPsicopedagogía Maintenance",
        "description": "I maintained a social platform on WordPress, deployed on Azure DevOps. My responsibilities included content updating, performance optimization, and managing site security.",
        "link": "https://faropsicopedagogia.org",
        "image": "/projects/faro.webp",
        "tags": [TAGS.WORDPRESS, TAGS.AZURE]
      },
      {
        "title": "Electoral Witnesses",
        "description": "I developed key frontend functionalities for an electoral witness application using Nuxt and Vuetify. This project, deployed on AWS, significantly improved user interaction and incident reporting.",
        "tags": [TAGS.NUXT, TAGS.VUETIFY]
      },
      {
        "title": "Frontend Development at MercadoLibre",
        "description": "I participated in the complete frontend development for MercadoLibre using the Nordic framework and AndesUI component library, contributing to a richer and more accessible user experience.",
        "image": "/projects/SEOMeli.webp",
        "tags": [TAGS.NORDIC, TAGS.ANDESUI]
      },
      {
        "title": "Trackeum Development",
        "description": "At Trackeum, I was in charge of designing and developing interfaces using React and Material UI, achieving an intuitive and efficient user experience. The product was deployed on AWS, ensuring high availability and scalability.",
        "link": "https://trackeum.ticsocial.com.co/",
        "image": "/projects/trackeum.webp",
        "tags": [TAGS.REACT, TAGS.MATERIALUI]
      }
    ],
    "sourceCode": "View Source Code",
    "aboutMeName": "My name is Dimas Mendoza,",
    "webDeveloper": "I am a Web Developer,",
    "aboutMeTime": "I have worked for several years in technology, I have taken advantage of my talent to work on different projects, but now I want",
    "aboutMeProposal": "to build software that helps people.",
    "aboutMeProposal0": "to be able to use what I have learned and",
    "aboutMeProposal01": "One of my goals is",
    "aboutMeObjective02": "to learn from the best,",
    "aboutMeObjective03": "To be able to",
    "aboutMeObjective04": "help people who do not have access to this type of knowledge.",
    "aboutMeObjective05": "This knowledge is essential to share and I want",
    "aboutMeObjective06": "to transmit it through a blog,",
    "aboutMeObjective07": "but this will not be achieved by writing in the regular way, but through",
    "aboutMeObjective08": "stories that can facilitate learning.",
    "aboutMeObjective09": "This is a part of me, if you want to know more about me contact me and let's chat.",
    "dimas4dev": "dimas4dev",
    "rights": "Almost all rights reserved"
}


}
