"use client";

import { useRef } from "react";
import SectionHeading from './section-heading'
import { projectsData } from '../lib/data'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from '../lib/hooks';
import React from "react";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.75);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28'>
        <SectionHeading>Projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
            <Project {...project} />
                </React.Fragment>
                ))}
        </div>
    </section>

  )
}

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  const finalUrl = projectUrl || "#"; // Fallback to a default like "#"
  const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
    return (
      <a href={finalUrl} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}

          className="group mb-3 sm:mb-24 last:mb-0"
        >
          <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[24rem] hover:bg-gray-200 transition sm:group-even:pl-8 ">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 ">
                {description}
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
    
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-1.08
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
    
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
    
            group-even:right-[initial] group-even:-left-40"
            />
          </section>
        </motion.div>
        </a>
      );
}