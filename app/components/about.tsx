"use client";

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '../lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About", 0.6);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After gaining valuable experience through my first internship at Ubisoft, I knew that my <span className="font-medium">
    passion for programming was undeniable.</span>
     I thrive on challenges and problem-solving, and my core tech stack includes
      <span className="font-medium"> C#, C++, Python, TypeScript and Javascript</span>. 
      I&apos;m always ready to learn and adapt to new technologies. Currently, 
      I&apos;m seeking opportunities to contribute my skills and creativity has an intern Fullstack or Back-End software developer.

  <span className="italic">When I&apos;m not immersed in code</span>, 
  you&apos;ll find me exploring the fascinating world of Quantum, AI 
  or indulging my love for video games. 
</p>
    </motion.section>
  );
}