"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import { skillsData } from "../lib/data";

const listItemVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1, // each item will have a delay of 0.1s more than the previous one
      stiffness: 150,
      type: "spring",
    },
  }),
};
export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.4);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 mt-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill: string, index: number) => (
          <motion.li
            key={skill} // it's better to use unique values such as skill for keys
            custom={index} // custom prop can be used to pass the delay multiplier
            variants={listItemVariants} // passing the variant object we defined
            initial="hidden" // initial state before the animation
            animate="visible" // animate to the "visible" state
            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}