// projectData.js
import cleaneasedark from "../assets/capstone_projects/cleaneasedarkgif.gif";
import cleaneaselight from "../assets/capstone_projects/cleaneaselightgif.gif";
import stcLogo from "../assets/STC-logo.png";
import reduxcart from "../assets/miniprojects/reduxcart.png";
import reduxcartgif from "../assets/miniprojects/reduxcartgif.gif";
import library from "../assets/miniprojects/library.png";
import librarygif from "../assets/miniprojects/librarygif.gif";
import axioscrud from "../assets/miniprojects/axioscrud.png";
import axioscrudgif from "../assets/miniprojects/axioscrudgif.gif";
import dummycart from "../assets/miniprojects/dummycart.png";
import dummycartgif from "../assets/miniprojects/dummycartgif.gif";
import guviblog from "../assets/miniprojects/guviblog.png";
import guvibloggif from "../assets/miniprojects/guvibloggif.gif";
import passwordchecker from "../assets/miniprojects/passwordchecker.png";
import passwordcheckergif from "../assets/miniprojects/passwordcheckergif.gif";
import todoapp from "../assets/miniprojects/todoapp.png";
import todoappgif from "../assets/miniprojects/todoappgif.gif";
import vtscanner from "../assets/miniprojects/vtscanner.png";
import vtscannergif from "../assets/miniprojects/vtscannergif.gif";
import weather from "../assets/miniprojects/weather.png";
import weathergif from "../assets/miniprojects/weathergif.gif";
import calculator from "../assets/miniprojects/calculator.png";
import calculatorgif from "../assets/miniprojects/calculatorgif.gif";
import responsive from "../assets/miniprojects/responsive.png";
import responsivegif from "../assets/miniprojects/responsivegif.gif";
import domform from "../assets/miniprojects/domform.png";
import domformgif from "../assets/miniprojects/domformgif.gif";
import htmlcert from "../assets/Certificates/FSD-HTML.png"
import csscert from "../assets/Certificates/FSD-CSS.png"
import bootstrapcert from "../assets/Certificates/FSD-Bootstrap.png"
import javascriptcert from "../assets/Certificates/FSD-JavaScript.png"
import reactjscert from "../assets/Certificates/FSD-ReactJS.png"
import mysqlcert from "../assets/Certificates/FSD-MySQL.png"
import mongodbcert from "../assets/Certificates/FSD-MongoDB.png"
import nodejscert from "../assets/Certificates/FSD-NodeJS.png"
import merncert from "../assets/Certificates/FSD-MERN.png"

export const capstoneImages = {
  dark: cleaneasedark,
  light: cleaneaselight,
};

export const capstoneProject = {
  id: 1,
  title: "CleanEase _Residential & Commercial Cleaning Service Platform_",
  description:
    "CleanEase is a full-stack MERN application designed to simplify the booking and management of residential and commercial cleaning services. It offers seamless user authentication, role-based dashboards for users and admins, task scheduling, real-time updates, and secure payment processing with Stripe. The platform delivers a responsive and intuitive UI with an emphasis on usability, security, and modern web development best practices.",
  liveLink: "https://ryd-cleanease.netlify.app/", // Replace with real URL
  sourceLinkFE: "https://github.com/Yogadeepan29/CAPSTONE--CleanEase_Frontend", // Replace with real repo
  sourceLinkBE: "https://github.com/Yogadeepan29/CAPSTONE--CleanEase_Backend", // Replace with real repo
  APIdocument: "https://documenter.getpostman.com/view/35158032/2sAYdoG8Kq",
  technologies: [
    "React.js",
    "Tailwind CSS",
    "Flowbite",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Stripe API",
    "JWT",
    "OAuth",
  ],
};

export const miniProjects = [
  {
    id: 1,
    image: reduxcart,
    gif: reduxcartgif,
    title: "Redux Cart",
    description:
      "A responsive shopping cart application built with React, Redux Toolkit, and Bootstrap. Users can manage cart items, update quantities, remove items, and calculate the subtotal in real-time.",
    liveLink: "https://ryd-react-reduxcart.netlify.app",
    sourceLink: "https://github.com/Yogadeepan29/React--Day-32--Redux_Task",
    technologies: ["React", "Redux Toolkit", "Bootstrap", "JavaScript"],
  },
  {
    id: 2,
    image: library,
    gif: librarygif,
    title: "Library Management System",
    description:
      "A responsive web-based library management system built with React, Formik, and Yup. It allows users to manage authors and books, with features to create, edit, delete records and validate forms.",
    liveLink: "https://ryd-react-formiklibrary.netlify.app",
    sourceLink: "https://github.com/Yogadeepan29/React--Day-31--Formik_Task",
    technologies: ["React", "Formik", "Yup", "Bootstrap", "JavaScript"],
  },

  {
    id: 3,
    image: axioscrud,
    gif: axioscrudgif,
    title: "Axios | CRUD UserDetails",
    description:
      "A React-based CRUD user management app using Axios and Mock API. Users can add, edit, and delete records with a clean, responsive UI.",
    liveLink: "https://ryd-react-axioscrud.netlify.app",
    sourceLink: "https://github.com/Yogadeepan29/React--Day-30--Axios_Task",
    technologies: [
      "React",
      "Axios",
      "React Router DOM",
      "Mock API",
      "JavaScript",
    ],
  },
  {
    id: 4,
    image: dummycart,
    gif: dummycartgif,
    title: "DummyCart",
    description:
      "A simple shopping cart application built with React and Context API. Users can add/remove items, update quantities, and view cart totals.",
    liveLink: "https://ryd-react-dummycart.netlify.app",
    sourceLink:
      "https://github.com/Yogadeepan29/React--Day-28--Context-API_Task",
    technologies: [
      "React",
      "Context API",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 5,
    image: guviblog,
    gif: guvibloggif,
    title: "Guvi Blog Clone",
    description:
      "A React-based clone of the Guvi Blog site featuring a navigation menu and static course pages for 11 categories using React Router DOM.",
    liveLink: "https://ryd-react-guviblog.netlify.app",
    sourceLink: "https://github.com/Yogadeepan29/React--Day-26--Guvi-Blog_Task",
    technologies: ["React", "React Router DOM", "Bootstrap"],
  },
  {
    id: 6,
    image: todoapp,
    gif: todoappgif,
    title: "Todo App with CRUD Functionalities",
    description:
      "A simple and interactive Todo App built with React that supports creating, editing, deleting, and filtering tasks based on their completion status.",
    liveLink: "https://ryd-react-todoapp.netlify.app",
    sourceLink: "https://github.com/Yogadeepan29/React--Day-25--TODO-App_Task",
    technologies: ["React", "Bootstrap"],
  },
  {
    id: 7,
    image: vtscanner,
    gif: vtscannergif,
    title: "VirusTotal Scanner",
    description:
      "A web-based scanner that uses the VirusTotal API to scan URLs and files for malware, with detailed analysis results displayed using Fetch API, Promises, and DOM manipulation.",
    liveLink: "https://ryd-vtscanner.netlify.app",
    sourceLink:
      "https://github.com/Yogadeepan29/Async--Day-20_Task-1_VirusTotal-Scanner",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "VirusTotal API"],
  },
  {
    id: 8,
    image: passwordchecker,
    gif: passwordcheckergif,
    title: "Password Checker",
    description:
      "A secure password validation tool using the Have I Been Pwned API and k-anonymity technique to check if a password has been involved in data breaches.",
    liveLink: "https://ryd-passwordchecker.netlify.app",
    sourceLink:
      "https://github.com/Yogadeepan29/Async--Day-20_Task-2_Password-Checker",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "HIBP API"],
  },
  {
    id: 9,
    image: domform,
    gif: domformgif,
    title: "DOM Form to Table",
    description:
      "A responsive form-to-table web app using HTML, CSS, Bootstrap, and JavaScript. Users can submit form data, which is appended to a table dynamically using DOM manipulation.",
    liveLink: "https://ryd-dom-html-forms.netlify.app",
    sourceLink: "https://github.com/Yogadeepan29/DOM_Day-15_Task-2_HTML-Forms",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "DOM"],
  },
  {
    id: 10,
    image: weather,
    gif: weathergif,
    title: "RestCountries & Weather Info",
    description:
      "A responsive web app that displays information about 250 countries using the Rest Countries API and shows live weather data using the OpenWeather API.",
    liveLink: "https://ryd-fetch-api.netlify.app",
    sourceLink: "https://github.com/Yogadeepan29/Async--Day-17-fetch-API",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Fetch API",
      "RestCountries API",
      "OpenWeather API",
    ],
  },
  {
    id: 11,
    image: calculator,
    gif: calculatorgif,
    title: "DOM Calculator",
    description:
      "A DOM-based calculator app that handles infix expressions and supports basic arithmetic operations. Includes keyboard input validation and responsive design.",
    liveLink: "https://ryd-calculator.netlify.app",
    sourceLink: "https://github.com/Yogadeepan29/DOM_Day-15_Task-1_Calculator",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "DOM"],
  },
  {
    id: 12,
    image: responsive,
    gif: responsivegif,
    title: "GitHub Profile Page Layout",
    description:
      "A responsive GitHub profile page clone created using HTML, CSS, and Bootstrap. Recreated from a reference image to practice layout and responsiveness.",
    liveLink: "https://rydgithubpagedesign.netlify.app",
    sourceLink:
      "https://github.com/Yogadeepan29/HTML-CSS-BS_Day-12-Task-1_GitHub-Page",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

export const educationData = [
  {
    id: 1,
    type: "education",
    icon: "IoMdSchool",
    date: "JUN 2021 - MAY 2023",
    cgpa: "CGPA - 8.10",
    college: "SIR THEAGARAYA COLLEGE",
    location: "Old washermenpet, Chennai.",
    logo: stcLogo,
    degree: "M.Sc Computer Science",
    type: "PG",
    details: [
      `Built a research project titled "Exploring Device Identity Spoofing for Research on Cloud Service Limitations" to study how Android’s open-source ecosystem enables device-level customization and its effects on service accessibility.`,
      `Demonstrated how custom ROMs like Pixel Experience can influence platform-specific services, such as Google Photos' storage policies, using tools like Linux terminals, ADB, and kernel modifications.`,
      `Completed an internship at Zero2Infynite, where I gained foundational knowledge in ethical hacking and cybersecurity methodologies.`,
      `Provided freelance tech services including custom PC builds, network setup, and hardware/software troubleshooting for various personal and business clients.`,
    ],
  },
  {
    id: 2,
    type: "education",
    icon: "IoMdSchool",
    date: "JUN 2017 - APR 2020",
    cgpa: "CGPA - 6.34",
    college: "SIR THEAGARAYA COLLEGE",
    location: "Old washermenpet, Chennai.",
    logo: stcLogo,
    degree: "B.Sc Computer Science",
    type: "UG",
    details: [
      `Served as a Cadet Under Officer (CUO) in the National Cadet Corps (NCC), leading and mentoring over 100+ cadets with dedication and discipline.`,
      `Represented Tamil Nadu in the prestigious RDC IGC - 2019 and attended the Army Attachment Camp under the DOGRA Regiment in Hyderabad.`,
      `Received the Best Parade Commander award and actively participated in inter-college competitions and NCC events, including drills and camp coordination.`,
      `Developed a strong interest in mobile photography and camera optimization through custom GCam ports, experimenting with software tweaks and config files to enhance image quality.`,
      `Gained hands-on knowledge of PC hardware components and performance tuning, sparking a passion for building and troubleshooting computer systems.`,
    ],
  },
];

export const skills = {
  Frontend_Development: [
    { name: "HTML", icon: "FaHtml5", color: "#e34c26" },
    { name: "CSS", icon: "FaCss3Alt", color: "#264de4" },
    { name: "JavaScript", icon: "FaJs", color: "#f0db4f" },
    { name: "Bootstrap", icon: "FaBootstrap", color: "#7952b3" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38bdf8" },
    { name: "Flowbite", icon: "GiFlowerTwirl", color: "#38bdf8" },
    { name: "React", icon: "FaReact", color: "#61dafb" },
    { name: "Redux", icon: "SiRedux", color: "#764abc" },
    { name: "Framer Motion", icon: "SiFramer", color: "#e652e6" },
  ],
  Backend_Development: [
    { name: "Node.js", icon: "FaNodeJs", color: "#3c873a" },
    { name: "Express.js", icon: "SiExpress", color: "#333333" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47a248" },
    { name: "Firebase", icon: "SiFirebase", color: "#ffca28" },
    { name: "MySQL", icon: "GrMysql", color: "#00758f" },
    { name: "OAuth (JWT)", icon: "TbBrandOauth", color: "#333333" },
  ],
  Development_Tools: [
    { name: "Git", icon: "FaGitAlt", color: "#f05032" },
    { name: "GitHub", icon: "FaGithub", color: "#333333" },
    { name: "Netlify", icon: "SiNetlify", color: "#38e1f3" },
    { name: "VS Code", icon: "VscVscode", color: "#007acc" },
    { name: "Postman", icon: "SiPostman", color: "#ff6c37" },
    { name: "Render", icon: "SiRender", color: "#333333" },
  ],
};

export const certificatesData = [
  {
    id: 1,
    title: "HTML",
    image: htmlcert,
    certificateLink: "https://www.guvi.in/certificate?id=W3763hl49D12k5Y1bn",
  },
  {
    id: 2,
    title: "CSS",
    image: csscert,
    certificateLink: "https://www.guvi.in/certificate?id=3932063RM71j41Hm51",
  },
  {
    id: 3,
    title: "Bootstrap",
    image: bootstrapcert,
    certificateLink: "https://www.guvi.in/certificate?id=51vB1w627493MbO3Q7",
  },
  {
    id: 4,
    title: "JavaScript",
    image: javascriptcert,
    certificateLink: "https://www.guvi.in/certificate?id=5QC1I19736mdO42v93",
  },
  {
    id: 5,
    title: "ReactJS",
    image: reactjscert,
    certificateLink: "https://www.guvi.in/certificate?id=2310u39ic69d54Y711",
  },
  {
    id: 6,
    title: "MySQL",
    image: mysqlcert,
    certificateLink: "https://www.guvi.in/certificate?id=Yv3211J7n6195u43Hb",
  },
  {
    id: 7,
    title: "MongoDB",
    image: mongodbcert,
    certificateLink: "https://www.guvi.in/certificate?id=714cm3A51n61Y293V4",
  },
  {
    id: 8,
    title: "NodeJS",
    image: nodejscert,
    certificateLink: "https://www.guvi.in/certificate?id=26m1Q1STI5w394e739",
  },
  {
    id: 9,
    title: "FSD-MERN",
    image: merncert,
    certificateLink: "https://www.guvi.in/certificate?id=376342S131i5p4m9cY",
  },
];
