"use client"

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

import Image from 'next/image'
import {Button} from "@heroui/button";

export default function Home() {

  const [selectedTab, setSelectedTab] = useState(allIngredients[2]);

  return (
    <div className="bg-gray-900 min-h-screen md:p-[10vw] text-gray-300 font-mono"  style={{ scrollBehavior: 'smooth' }}>
      <div className="flex">

        <div className="w-[200px] h-[200px] rounded-xl overflow-hidden border-2 border-gray-200">
          <Image
            src="/photoface.png"
            alt="logo"
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
        </div>

        <div className='flex flex-col justify-end p-10 h-[200px]'>

          <h1 className='text-[60px]'>Aymen Shoteri</h1>
          <p className='text-[20px] text-gray-500'>CS undergrad, software engineer</p>

          <div className="flex items-center gap-4 mt-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aymen-shoteri/"
              className="flex items-center gap-2 bg-gray-700 border border-gray-200 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition"
            >
              <Image src="/linkedin.webp" alt="LinkedIn" className="h-6 w-auto object-contain" width={50} height={50} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AymenS02"
              className="flex items-center gap-2 bg-gray-700 border border-gray-200 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition"
            >
              <Image src="/github.png" alt="GitHub" className="h-6 w-auto object-contain" width={50} height={50} />
            </a>

            {/* Email Button */}
            <a
              href="mailto:shoteriaymen@gmail.com"
              className="flex items-center gap-2 bg-gray-700 border border-gray-200 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition"
            >
              <Image src="/email.png" alt="Email" className="h-6 w-auto object-contain" width={24} height={24} />
              <span className='text-gray-500'>shoteriaymen@gmail.com</span>
            </a>
          </div>


        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl">About Me</h2>
        <p className="mt-4 text-lg">
          I&apos;m a software engineer with 2 years of experience in building web applications using React, Next.js, and Node.js. I&apos;m passionate about learning new technologies and building products that make a difference.
        </p>
      </div>



      <div className="mt-10 w-[80vw] h-[60vh] rounded-lg bg-gray-800 overflow-hidden shadow-lg flex flex-col">
            <nav className="bg-gray-800 border-b border-gray-200 rounded-t-lg">
                <ul className="flex w-full list-none p-0 m-0 font-medium text-sm">
                    {allIngredients.map((item) => (
                        <motion.li
                            key={item.label}
                            initial={false}
                            animate={{
                                backgroundColor:
                                    item === selectedTab ? "#374151" : "#1f2937",
                            }}
                            className="flex-1 min-w-0 flex items-center justify-between px-4 py-2 cursor-pointer relative"
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div
                                    className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-blue-500"
                                    layoutId="underline"
                                    id="underline"
                                />
                            ) : null}
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <main className="flex flex-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[128px]"
                    >
                      <div className="w-[80vw] h-[60vh]">
                        {selectedTab.details}
                      </div>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>

        <div className="mt-20 w-[80VW] h-[60vh] rounded-lg  overflow-hidden flex flex-col">
            <motion.div 
              animate={{ x: ["400%", "-400%", "400%"], y: ["100%", "200%", "300%"], rotate: [360, 360, 360] }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="w-[20%] h-[20%] flex bg-slate-500">
                <h1 className="text-3xl p-4 w-full h-full flex items-center justify-center">BOX</h1>
            </motion.div>
        </div>


        
    </div>
  );
}
/**
 * ==============   Data   ================
 */
const allIngredients = [
  { 
    icon: "💼", 
    label: "Experience", 
    details: <div className="flex justify-evenly gap-4 flex-wrap" >

      {/* <div className="bg-slate-950 w-[25vw] p-4 m-4 rounded-lg flex flex-col" >
        <h1 className="text-xl font-bold text-white">Full Stack Developer</h1>
        <div className="flex gap-2">
          <p className="text-lg">at</p>
          <p className="text-white font-bold text-lg">The Win Column</p>
        </div>
        <hr className="mt-2"/>
        <div className=" mt-1 rounded-lg flex flex-col gap-2 ">
          <p className="text-lg text-white">May 2024 - Aug 2024</p>
          <p className="text-sm text-white">Developed a dynamic educational platform with JavaScript, SCSS, and MongoDB, integrating secure payments, authentication, and a responsive UI for 100+ users.</p>

          <div className="flex gap-2">
            <Image src="/skills/react.webp" alt="React" width={48} height={48} className="object-contain" />
            <Image src="/skills/mongodb.webp" alt="MongoDB" width={48} height={48} className="object-contain" />
            <Image src="/skills/sass.webp" alt="Sass" width={48} height={48} className="object-contain" />
          </div>
        </div>
      </div>

      <div className="bg-slate-950 w-[25vw] p-4 m-4 rounded-lg flex flex-col" >
        <h1 className="text-xl font-bold text-white">Front-End Develope</h1>
        <div className="flex gap-2">
          <p className="text-lg">at</p>
          <p className="text-white font-bold text-lg">Road 2 Righteousness</p>
        </div>
        <hr className="mt-2"/>
        <div className=" mt-1 rounded-lg flex flex-col gap-2 ">
          <p className="text-lg text-white">Oct 2024 - Jan 2025</p>
          <p className="text-sm text-white">Developed a modern, responsive website for a self-development retreat company using React, Tailwind CSS, and GSAP, integrating secure user registrations, a seamless booking system, and optimized performance for over 200 visitors.</p>

          <div className="flex gap-2">
            <Image src="/skills/react.webp" alt="React" width={48} height={48} className="object-contain" />
            <Image src="/skills/gsap.webp" alt="MongoDB" width={48} height={48} className="object-contain" />
            <Image src="/skills/tailwind.png" alt="Sass" width={48} height={48} className="object-contain" />
          </div>
        </div>
      </div> */}

      <div className="bg-slate-950 w-[25vw] p-4 m-4 rounded-lg flex flex-col" >
        <h1 className="text-xl font-bold text-white">Software Engineer</h1>
        <div className="flex gap-2">
          <p className="text-lg">at</p>
          <p className="text-white font-bold text-lg">McMaster MSA</p>
        </div>
        <hr className="mt-2"/>
        <div className=" mt-1 rounded-lg flex flex-col gap-2 ">
          <p className="text-lg text-white">May 2024 - Aug 2024</p>
          <p className="text-sm text-white">Developed a modern, responsive website for a self-development retreat company using React, Tailwind CSS, and GSAP, integrating secure user registrations, a seamless booking system, and optimized performance for over 200 visitors.</p>

          <div className="flex gap-2">
            <Image src="/skills/typescript.svg" alt="React" width={48} height={48} className="object-contain" />
            <Image src="/skills/node.webp" alt="MongoDB" width={48} height={48} className="object-contain" />
            <Image src="/skills/firebase.webp" alt="Sass" width={48} height={48} className="object-contain" />
          </div>
        </div>
      </div>

      <div className="bg-slate-950 w-[25vw] p-4 m-4 rounded-lg flex flex-col" >
        <h1 className="text-xl font-bold text-white">Full Stack Developer</h1>
        <div className="flex gap-2">
          <p className="text-lg">at</p>
          <p className="text-white font-bold text-lg">Freelancing</p>
        </div>
        <hr className="mt-2"/>
        <div className=" mt-1 rounded-lg flex flex-col gap-2 ">
          <p className="text-lg text-white">May 2024 - Aug 2024</p>
          <p className="text-sm text-white">Developed custom, responsive websites using React, Next.js, and Tailwind CSS, integrating secure payment gateways, subscription models, interactive animations with Framer Motion, and MongoDB for managing data for over 50 clients.</p>
          <div className="flex gap-2">
            <Button className="py-1 px-5 text-sm text-black bg-gradient-to-tr from-slate-500 to-slate-300 border b-2 border-gray-200 rounded-sm">Projects</Button>
            <Button  className="py-1 px-5 text-sm text-black bg-gradient-to-tr from-slate-500 to-slate-300 border border-gray-200 rounded-sm">Skills</Button>
          </div>
        </div>
      </div>
    </div>
  },
  { 
    icon: "🚧", 
    label: "Projects", 
    details: <div className="w-20 h-screen">
      <div className="text-sm" >Experience 1: Software Engineer at XYZ</div>
      <div className="text-sm" >Experience 2: Frontend Developer at ABC</div>
      <div className="text-sm" >Experience 3: Intern at DEF</div>
    </div>
  },
  { 
    icon: "⚙️", 
    label: "Skills", 
    details: <div className="w-20 h-screen">
      <div className="text-sm" >Experience 1: Software Engineer at XYZ</div>
      <div className="text-sm" >Experience 2: Frontend Developer at ABC</div>
      <div className="text-sm" >Experience 3: Intern at DEF</div>
    </div>
  },
];



