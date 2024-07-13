import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  virim,
  technohacks,
  innobyte,
  threejs,
  firebase,
  pms,
  chat
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Virim Infotech",
    icon: virim,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and while emphasizing core software development skills like handling forms, validations, backend integration, and Bootstrap.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Innobyte Services",
    icon: innobyte,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Mar 2024",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "TechnoHacks Edutech",
    icon: technohacks,
    iconBg: "#383E56",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",  
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Chat Room",
    description:
      "Developed a robust and scalable chat application utilizing JavaScript, React, Node.js, and Firebase, with a responsive UI designed using Tailwind CSS. Implemented real-time messaging functionality with WebSockets to ensure seamless communication between users, alongside secure user authentication and authorization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: chat ,
    source_code_link: "https://chatroom.j471n.in/",
  },
  {
    name: "Placement Management System",
    description:
      "Created a web application for the training and placement department with dedicated login pages for Admin, Coordinator, and Student roles. Implemented a feature allowing Admin to post notices to all registered users, streamlined information dissemination within the   system",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: pms,
    source_code_link: "https://code-placement.000webhostapp.com/index.php",
  },
  {
    name: "Firebase Contact App",
    description:
    "Designed and developed a contact management application using Firebase as the backend and implemented user authentication using Firebase Authentication to ensure secure access to the application.\n\n" +
    "Implemented CRUD (Create, Read, Update, Delete) functionality for managing contacts, allowing users to add, view, edit, and delete contacts.",
    tags: [
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: firebase,
    source_code_link: "https://react-contact-app.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
