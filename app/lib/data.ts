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
      "I'm a second-year Software Engineering student at Université Laval, passionate about AI, game development, and quantum computing. ",
      " I'm actively involved in AI-related groups and have a strong command of C++ and Python. ",
      " My diverse interests drive my ambition to explore various career paths within the software engineering field."],

    bulletspoints: [
        "Member of the Aritifical Intelligence Club",
      ],
    icon: React.createElement(LuGraduationCap),
    date: "Autumn 2022 - Winter 2026  4 years",
    tags: ["C++", "Python", "Gantt"],

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
      "Notably, received callback offers from both my manager and Ubisoft, recognizing impactful contributions.",
    ],
    bulletspoints: [
      "Collaborated with cross-functional teams, learning from various specialties.",
      "Actively participated in coding projects beyond my own, contributing to the success of various initiatives collaborated with diverse teams, including international colleagues, to achieve project goals.",
      "Demonstrated adaptability by overcoming unknown programming language and library limitations.",
      "Earned admiration for effective communication skills, leading to increased project visibility and cross-platform demand.",
      "Utilized a diverse skill set, including C#, JavaScript, .NET, Blazor, D3.js, XUnit, and more, to enhance project tooling.",
    ],
    tags: ["C#", "JavaScript", "MongoDB", ".NET Environnement", "XUnit", "Gitlab", "Microsoft SQL Server", " Blazor", "D3.js", "Test-Driven Development (TDD)","Css"],
  },  
  {
    title: "Your Compagny",
    location: "North America",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      bulletspoints: [
        "Continuously improved contributions, showcasing commitment to personal and professional growth.",
        "Effectively collaborated with diverse teams, including international colleagues, to achieve project goals."
      ],
      icon: React.createElement(FaReact),
    date: "2021 - present",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],

  },
] as const;

export const projectsData = [
  {
    title: "This Website - React",
    description:
    [  "The reason for this projects was a to make sure i have portofolio website but to also explore other part of the react ecosystem. I used Next.js, TypeScript, Tailwind CSS and Framer Motion which i never used before.",
      "I also used Vercel to deploy the website. But As you know I didnt use anything of this in my Internship at ubiosft I wanted to touche more of the more mainstream tech stacks.",
      "So after this projet and my internship i can pretty sure i can produce ecosystem agnostic code and i can adapt to any tech stack. which make any usage of website as interface a breeze.",
      "the website is also responsive and i used the mobile first approach. I wanted to make i use a tech stack that is common across the industry and that i can use in my internship.",
      "I am aware of better new technologies like bun js and others "],
    tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    imageUrl: thiswebsiteImg,
  },
  {
    title: "Under construction",
    description:
      "Artificial intelligence (AI) is the ability of a computer program or a machine to think and learn. It is also a field of study which tries to make computers smart.",
    tags: [],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind CSS",
  "SQL",
  "Python",
] as const;