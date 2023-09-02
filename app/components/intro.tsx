"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
        <div className="flex items-center justify-center">
            <div className='relative'>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{type: "tween", duration: 0.2,}}>

              <Image className=" object-cover h-28 w-28 rounded-full border-[0.35rem] border-white shadow-xl" 
              src="/profilePicture.png" alt="Charles Poulin" width={192} height={192} quality={95} priority/>

              <motion.span className=' absolute bottom-0 text-4xl' >🚀</motion.span>

              </motion.div>
            </div>
            </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type: "tween", duration: 0.2, delay: 0.2}}>

        <span className="font-bold">Hello, I&apos;m Charles.</span>  I&apos;m currently pursuing a{" "}
        <span className="font-bold">Software Engineering degree</span>  and I&apos;m in my{" "}
        <span className="font-bold">2nd year</span> I have a strong passion for building
        <span className="italic"> Artificial Intelligence, Machine Learning, and Video Games</span>. and I&apos;m also deeply interested in the {" "}
        <span className="underline">Quantum Field</span>.
      </motion.h1>

    <motion.div className='flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium'
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{delay: 0.1}}>

      <Link href="#contact" 
      className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
      transition-all'
      > Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> </Link>

      <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105
      transition-all cursor-pointer border border-black/10'  href="/CharlesPoulinCV.pdf" download > Download CV <HiDownload className='opacity-70 group-hover:translate-y-1 transistion'/></a>

      <a className='group bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105
      transition-all cursor-pointer border border-black/10' href='https://www.linkedin.com/in/charles-poulin/' target="_blank"> < BsLinkedin /> </a>

      <a className='group bg-white p-4 flex text-gray-700 text-[1.35rem] items-center gap-2 rounded-full outline-none focus:scale-[1.15]  hover:scale-[1.15]  hover:text-gray-950 active:scale-105
      transition-all cursor-pointer border border-black/10' href='https://github.com/CharlesPoulin' target="_blank"> < FaGithubSquare /> </a>

    </motion.div>

    </section>
  )
}
