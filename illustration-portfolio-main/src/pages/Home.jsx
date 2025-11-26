import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, <TypeAnimation
                sequence={[
                  'I am Mayur Borse',
                  1000,
                  'Full Stack Developer',
                  1000,
                  'MERN Stack Specialist',
                  1000,
                ]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Fullstack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">India.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I’m a Full Stack Developer passionate about creating modern, clean, and efficient web experiences.
            I specialize in the MERN Stack and focus on building real-world products with smooth UI,
            optimized backend logic, and seamless user experience.
          </motion.p>
<motion.div
  className="flex items-center gap-x-5 mt-10 lg:mt-14"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 1 }}
>
  {[
    { Icon: BiLogoGmail, link: "mailto:mayurborse7440@gmail.com" },
    { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/mayur-borse-88b802367/" },
    { Icon: IoLogoTwitter, link: "https://twitter.com/mayurborse" },
    { Icon: BsGithub, link: "https://github.com/Mayur111-code" },
  ].map(({ Icon, link }, index) => (
    <motion.a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-2 lg:p-3 rounded border-2 border-black"
      whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
    </motion.a>
  ))}
</motion.div>

        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
