"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import { skillsData } from "../lib/data";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.4);

  const uniqueSkills = Array.from(new Set(skillsData));

  const listItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: index * 0.1, stiffness: 150, type: "spring" },
    }),
  };

  return (
    <section id="skills" ref={ref} className="mb-28 mt-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {uniqueSkills.map((skill, index) => (
          <motion.li
            key={skill}
            custom={index}
            variants={listItemVariants}
            initial="hidden"
            animate="visible"
            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
