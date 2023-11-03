"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import { skillsData } from "../lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
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
        {
          skillsData.map((skill: string, index: number): JSX.Element => (
            <motion.li
              key={index}
              custom={index}
              initial="initial"
              animate="animate"
              variants={fadeInAnimationVariants}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  );
}