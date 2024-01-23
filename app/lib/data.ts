import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import thiswebsiteImg from "@/public/thiswebsite.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
   {
    title: "Bachelors Degree in Software Engineering at Université Laval",
    location: "Quebec, QC",
    description:[
      "I'm a 2nd year Software Engineering student at Université Laval, passionate about Back-End, A.I., game development, and quantum computing. ",
      " I'm actively involved in AI-related groups and have a strong command of C# and .net Environnement. ",
      " My diverse interests drive my ambition to explore various career paths within the software engineering field."],

    bulletspoints: [
        "Member of the Artifical Intelligence Club", "Excellence Letter from Vice-Doyen of studies"
      ],
    icon: React.createElement(LuGraduationCap),
    date: "Autumn 2022 - Winter 2026  4 years",
    tags: ["C++", "Python", "Gantt", "agile", "Network", "DataBase", "UX"],

  },
  {
    title: "Tool Programmer Intern - Ubisoft",
    location: "Montreal, QC",
    date: "1st May 2023 - 25 august 2023  17 weeks",
    icon: React.createElement(CgWorkAlt),
    description: [
      "As a Tool Programmer Intern at Ubisoft, I've enhanced innersourcing processes, improved project visualization, and driven cross-platform demand. ",
      " My strong communication skills and adaptability, honed during my time at Ubisoft, have contributed to project success. I'm well-versed in Agile Scrum",
      "Embraced Test-Driven Development (TDD), collaborating with international teams, including colleagues from France, on D3.js integration in C#.",
    ],
    bulletspoints: [
      "Collaborated with cross-functional teams, learning from various specialties.",
      "Actively participated in coding projects beyond my own, contributing to the success of various initiatives collaborated with diverse teams, including international colleagues, to achieve project goals.",
      "Demonstrated adaptability by overcoming unknown programming language and library limitations.",
      "Earned admiration for effective communication skills, leading to increased project visibility and cross-platform demand.",
      "Utilized a diverse skill set, including C#, JavaScript, .NET, Blazor, D3.js, XUnit, and more, to enhance project tooling.",
    ],
    tags: ["C#", "JavaScript", "MongoDB", ".NET Environnement", "XUnit", "Gitlab", "Microsoft SQL Server", "Blazor", "D3.js", "Test-Driven Development (TDD)","Css"],
  },  
  {
    title: "Your Compagny",
    location: "North America",
    description:
      "I am actively researching for a Summer 2024 internship",
      bulletspoints: [
        "🚀 Dynamic track record in delivering high-impact projects, leveraging advanced software development methodologies.",
        "🔍 Proficient in full-stack development with expertise in C#, C++, Python, and the comprehensive .NET ecosystem.",
        "🌟 Agile and adaptable in fast-paced, technologically diverse environments, consistently delivering quality solutions.",
        "📈 Proactively seeking to contribute cutting-edge solutions and broaden technical horizons in a Summer 2024 internship.",
        "📊 Experienced in modern web development with Blazor and interactive data visualization using D3.js.",
        "🌐 Collaborative team player skilled in cross-functional coordination to drive project success and exceed KPIs.",
        "💪 Passionate Agile Scrum practitioner, advocating for efficient and flexible project management.",
        "📜 Actively pursuing a Summer 2024 internship to further enhance software engineering skills and industry knowledge.",
        "🎯 Highly motivated to tackle new technological challenges and spearhead innovative solutions in a dynamic team setting.",
        "🔗 Eager to integrate emergent technologies and trends to create impactful user-centric applications."
      ],
      icon: React.createElement(FaReact),
    date: "Summer 2024",
    tags: ["Back-End", "learning", "Artifical Intelligence", "Fullstack", ".NET environnement"],

  },
] as const;

export const projectsData = [
  {
    title: "This Website - React",
    description:[
      "Developed a portfolio website exploring the React ecosystem, utilizing Next.js, TypeScript, Tailwind CSS, and Framer Motion for a responsive, mobile-first design. Deployed with Vercel."
    ],
    tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    imageUrl: thiswebsiteImg,
    projectUrl: "https://poulincharles.com/",
  },
  {
    title: "Emotes in Teams - Microsoft Teams",
    description: [
      "Custom emote integration app. The app allows users to add custom emotes to their messages, by having a list of Emotes from the Website Catalogue",],
    tags: ["Blazor", "Microsoft Teams"," C#", ".NET", "ASP.NET", "REST API", "Swagger", "TailwindCSS", "Azure", "MongoDb"],

    imageUrl: corpcommentImg,
    projectUrl: "https://www.loom.com/share/81f917d6bbf04305aa19e8a6c3f9e7ec?sid=35f042d4-af9f-4f5e-ad93-db45ac57c6b1",
  },
] as const;


// hardcode due to a bug
const skillsArray = [
  "C++", "PYTHON", "GANTT", "AGILE", "C#", "JAVASCRIPT", "MONGODB", ".NET ENVIRONNEMENT",
  "XUNIT", "GITLAB", "MICROSOFT SQL SERVER", "BLAZOR", "D3.JS", "TEST-DRIVEN DEVELOPMENT (TDD)",
  "CSS", "BACK-END", "LEARNING", "ARTIFICAL INTELLIGENCE", "FULLSTACK", ".NET ENVIRONNEMENT",
  "NEXT.JS", "FRAMER MOTION", "TYPESCRIPT", "MICROSOFT TEAMS", "C#", ".NET",
  "ASP.NET", "REST API", "SWAGGER", "TAILWINDCSS", "AZURE", "MONGODB"
];

// Removing duplicates using Set
export const skillsData = Array.from(new Set(skillsArray));

// Now uniqueSkills contains only unique values
