import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiRailway,
  SiRender,
} from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";

import { BiGlobe, BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { id: 1, name: "HTML", icon: <FaHtml5 size={50} /> },
        { id: 2, name: "CSS", icon: <FaCss3Alt size={50} /> },
        { id: 3, name: "JavaScript", icon: <FaJs size={50} /> },
        { id: 4, name: "React JS", icon: <FaReact size={50} /> },
        { id: 5, name: "Bootstrap", icon: <FaBootstrap size={50} /> },
        { id: 6, name: "Tailwind CSS", icon: <RiTailwindCssFill size={50} /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { id: 7, name: "Node.js", icon: <FaNodeJs size={50} /> },
        { id: 8, name: "Express.js", icon: <SiExpress size={50} /> },
        { id: 9, name: "MongoDB", icon: <SiMongodb size={50} /> },
        { id: 10, name: "SQL", icon: <BiLogoPostgresql size={50} /> },
        { id: 20, name: "REST API", icon: <BiGlobe size={50} /> },
      ],
    },

    {
      title: "Tools",
      skills: [
        { id: 11, name: "Git", icon: <FaGitAlt size={50} /> },
        { id: 12, name: "GitHub", icon: <BsGithub size={50} /> },
        { id: 13, name: "Figma", icon: <CgFigma size={50} /> },
        { id: 14, name: "Postman", icon: <SiPostman size={50} /> },
        { id: 21, name: "Terminal", icon: <VscTerminal size={50} /> },
      ],
    },

    {
      title: "Deployment",
      skills: [
        { id: 15, name: "Vercel", icon: <SiVercel size={50} /> },
        { id: 16, name: "Netlify", icon: <SiNetlify size={50} /> },
        { id: 17, name: "Firebase", icon: <SiFirebase size={50} /> },
        { id: 18, name: "Render", icon: <SiRender size={50} /> },
        { id: 19, name: "Railway", icon: <SiRailway size={50} /> },
      ],
    },
  ];

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* CATEGORY SECTIONS */}
        <div className="mt-10 space-y-16">
          {categories.map((cat, i) => (
            <div key={i}>
              {/* Category Title */}
              <motion.h3
                className="text-xl lg:text-2xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {cat.title}
              </motion.h3>

              {/* Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-32 w-32 lg:h-40 lg:w-40 flex flex-col items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: skill.id * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill.icon}
                    <p className="font-semibold">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
