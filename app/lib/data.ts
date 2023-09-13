import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    tags: ["C#", "JavaScript", "MongoDB", ".NET", "XUnit", "Gitlab", "Microsoft SQL Server", " Blazor", "D3.js", "Test-Driven Development (TDD)"],

  },  
  {
    title: "TODO",
    location: "Quebec, QC",
    description:
      "I.",
    bulletspoints: [
        "Continuously improved contributions, showcasing commitment to personal and professional growth.",
        "Effectively collaborated with diverse teams, including international colleagues, to achieve project goals."
      ],
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],

  },
  {
    title: "Full-Stack TODO",
    location: "Quebec, QC",
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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "Python",
  "Django",
] as const;