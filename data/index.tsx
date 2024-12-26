// import { link} from "fs";
// import {link} from "fs/promises";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Collaboration over competition.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to contact me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    des: "Full-Stack E-commerce. MERN Stack WebApp, ready to use for business..",
    img: "/p1.svg",
    iconLists: [
      "/re.svg",
      "/css-3.png",
      "/nodejs.png",
      "/window.png",
      "/fm.svg",
    ],
    link: "https://github.com/amanyadav8174/E-commerce-website-/tree/master/ecommerce---React--node-main/ecommerce---React--node-main",
  },
  {
    id: 2,
    title: "Flipkart",
    des: "Full-Stack Flipkart with Admin Dashboard and Paytm Payment Gateway. MERN Stack WebApp, ready to use for business.",
    img: "/flip.png",
    iconLists: [
      "/re.svg",
      "/css-3.png",
      "/nodejs.png",
      "/window.png",
      "/fm.svg",
    ],
    link: "https://flipkartweb-mern.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio - with nextJS ",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/port.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://aman-yadav-portfolio-sable.vercel.app/",
  },
  {
    id: 4,
    title: "Banking Website ",
    des: "Banking website With f",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];


export const testimonials = [
  {
    quote:
      "JavaScript is the language of the web, enabling interactivity and dynamic content.",
    name: "JavaScript",
    title: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    quote:
      "React allows us to build highly interactive and performant user interfaces.",
    name: "React",
    title: "Frontend Library",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    quote:
      "Node.js brings JavaScript to the server-side, powering modern web applications.",
    name: "Node.js",
    title: "Runtime Environment",
    image: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
  },
  {
    quote:
      "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    name: "Tailwind CSS",
    title: "CSS Framework",
    image:
      "https://img.icons8.com/?size=100&id=FnnFuAIw4e8j&format=png&color=000000",
  },
  {
    quote: "Git simplifies version control, enabling effective collaboration.",
    name: "Git",
    title: "Version Control System",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    quote:
      "React-based framework designed for building server-rendered and statically generated web applications.",
    name: "NextJS",
    title: "The React Framework for Production",
    image:
      "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000",
  },
  {
    quote:
      "MongoDB is a popular, open-source, NoSQL database designed for flexibility, scalability, and performance.",
    name: "Mongodb",
    title: "The Developer Data Platform",
    image:
      "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
  },
  {
    quote:
      "PostgreSQL is a powerful, open-source, relational database management system known for its reliability, scalability, and compliance with SQL standards. ",
    name: "postgreSql",
    title: "The World's Most Advanced Open Source Relational Database",
    image:
      "https://img.icons8.com/?size=100&id=LwQEs9KnDgIo&format=png&color=000000",
  },
  // {
  //   quote: "Git simplifies version control, enabling effective collaboration.",
  //   name: "Git",
  //   title: "Version Control System",
  //   image:
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  // },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  // {
  //   id: 2,
  //   name: "ReactJS",
  //   img: "/react.png",
  //   nameImg: "/ReactName.png",
  // },
  {
    id: 2,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software developer Self-Employee",
    desc: "developing web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Developer training",
    desc: "As a Full Stack Developer trainee, My role is to learn and develop both the front-end and back-end of web applications, ensuring seamless integration, functionality, and performance across the entire technology stack..",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web Developer Training ",
    desc: "MY  role is to learn and build responsive, user-friendly websites by developing front-end interfaces and ensuring back-end functionality, focusing on creating efficient, scalable, and visually appealing web applications..",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://portfolio-git-master-aman-yadav-s-projects.vercel.app/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aman-yadav-056120236/",
  },
];
