import { useEffect } from "react";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faPhp,
  faGit,
  faGithub,
  faBootstrap,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // For MongoDB
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    gsap.fromTo(
      ".name",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 2,
        duration: 1,
      }
    );

    gsap.fromTo(
      ".skills",
      {
        x: 1300,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 2,
        ease: "back.inOut",
      }
    );

    gsap.fromTo(
      ".project",
      {
        x: 1000,
        opacity: 0,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".project",
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          scrub: 2,
        },
      }
    );
  }, []);

  // Project list
  const projects = [
    {
      name: "Web frontend - Avhiraj Info Tech",
      desc: "Created frontend website for Avhiraj Info Tech Pvt Ltd using React.js, TailwindCSS, RWD, etc.",
      link: "https://github.com/somilhubhai/IT-frontend",
    },
    {
      name: "Blog App",
      desc: "Created a Blog app backend using Node.js, Express.js, and MongoDB.",
      link: "https://github.com/somilhubhai/Blog-App",
    },
    {
      name: "Chat App",
      desc: "Created a Chat app backend using Node.js, Express.js, and MongoDB.",
      link: "https://github.com/somilhubhai/chat-app",
    },
    {
      name: "Web frontend - Dylan Estate",
      desc: "Created the web frontend for Dylan Estate using React.js and TailwindCSS.",
      link: "https://github.com/somilhubhai/website-frontend",
    },
    {
      name: "Web Authentication",
      desc: "Developed web authentication for web apps using pass keys with SimpleWebAuth.",
      link: "https://github.com/somilhubhai/web-authentication",
    },
  ];

  // Skill set
  const skillSet = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "MongoDB", icon: faDatabase },
    { name: "Express.js", icon: faNodeJs },
    { name: "Node.js", icon: faNodeJs },
    { name: "PHP", icon: faPhp },
    { name: "GSAP", icon: false },
    { name: "TailwindCSS", icon: false },
    { name: "Git", icon: faGit },
    { name: "GitHub", icon: faGithub },
    { name: "Next.js", icon: false },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "mySql", icon: faDatabase },
    { name: "Wordpress", icon: faWordpress },
    { name: "JWT", icon: false },
  ];

  return (
    <div className="text-white overflow-x-hidden px-4 md:px-20">
      <div className="mt-16 md:mt-24">
        <h2 className="text-2xl md:text-4xl">Hey There!</h2>
        <h2 className="name text-3xl md:text-6xl mt-4">
          <b>I am Somil Gupta,</b>
          <br />a creative Web developer
        </h2>
      </div>
      <h2 className="skills font-bold text-3xl md:text-5xl mt-16 md:mt-24 text-center">
        SkillSets
      </h2>
      <div className="flex flex-wrap justify-center md:justify-between mt-10 skills1">
        {skillSet.map((skill, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            {skill.icon ? (
              <FontAwesomeIcon icon={skill.icon} size="3x" className="hover:scale-110 transition-transform transform duration-150" />
            ) : (
              <img
                src={`path/to/${skill.name.toLowerCase()}.png`}
                alt={skill.name}
                className="w-12 h-12"
              />
            )}
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
      <h2 className="projects-title font-bold text-3xl md:text-5xl mt-16 md:mt-24 text-center">
        Projects
      </h2>
      <div className="projects flex flex-wrap justify-center md:justify-between mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project w-full md:w-[48%] bg-gray-800 p-5 m-5  rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <h3 className="text-center font-bold text-xl">{project.name}</h3>
            <p className="text-center mt-4">{project.desc}</p>
            <div className="text-center mt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 rounded px-4 py-2 border-white bg-transparent hover:bg-gray-400"
              >
                Check it out
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
