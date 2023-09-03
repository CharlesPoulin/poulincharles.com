"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{delay: 0.2}}>
      <p className="mb-4">
        <SectionHeading>About me</SectionHeading>
        I am currently studying{" "}
        <span className="font-medium">Software engineering</span>, In Quebec, Canada{" "}
        <span className="italic">My favorite part of programming</span> is the
     
      </p>
    </motion.section>
  )
}
