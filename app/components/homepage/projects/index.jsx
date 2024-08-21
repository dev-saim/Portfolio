"use client";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import p1 from "../../../../public/Projects/p1.png";
import p2 from "../../../../public/Projects/p2.png";
import p3 from "../../../../public/Projects/p3.png";
import p4 from "../../../../public/Projects/p4.png";
import p5 from "../../../../public/Projects/p5.png";
import p6 from "../../../../public/Projects/p6.png";
import p7 from "../../../../public/Projects/p7.png";
import p8 from "../../../../public/Projects/p8.png";
import p9 from "../../../../public/Projects/p9.png";

const projectsData = [
  {
    title: "Halloweend",
    description:
      "A spooky Halloween-themed website featuring animations and interactive elements to celebrate the holiday.",
    image: p1,
    link: "https://ghoulishgreet.netlify.app/",
  },
  {
    title: "WebbyFrames Dashboard",
    description:
      "A modern and responsive admin dashboard with detailed analytics and intuitive user controls.",
    image: p5,
    link: "https://webbycontrol.netlify.app/",
  },
  {
    title: "E-commerce Website",
    description:
      "An e-commerce app specializing in mobile accessories, featuring diverse products, intuitive search, and fast checkout.",
    image: p8,
    link: "https://phoneessentialsstore.netlify.app/",
  },
  {
    title: "Blog Website",
    description:
      "A beautifully designed blog platform where users can publish, share, and read engaging content.",
    image: p7,
    link: "https://dailythoughtshub.netlify.app/",
  },
 
  {
    title: "Login & Signup Page",
    description:
      "A user-friendly login and signup page with seamless social media integration, ensuring quick and easy access to your account.",
    image: p9,
    link: "https://accesspoint.netlify.app/",
  },
  {
    title: "Dice Game",
    description:
      "A fun and simple dice game where users can roll the dice and test their luck against the odds.",
    image: p4,
    link: "https://rollthedicefun.netlify.app/",
  },

  {
    title: "E-commerce Website",
    description:
      "A fully-featured online store with product listings, shopping cart, and secure payment gateway.",
    image: p6,
    link: "https://fashionfindshub.netlify.app/",
  },
  {
    title: "Enhance AI",
    description:
      "An AI-powered tool that enhances and sharpens images, delivering clearer and crisper visuals.",
    image: p3,
    link: "https://enhanceaitech.netlify.app/",
  }, 
  {
    title: "ToDo List",
    description:
      "A sleek and efficient to-do list app designed for easy task management and productivity tracking.",
    image: p2,
    link: "https://listifytasks.netlify.app/",
  },
  {
    title: "Email Template",
    description:
      "A sleek and efficient to-do list app designed for easy task management and productivity tracking.",
    image: p9,
    link: "https://maildesignhub.netlify.app/",
  },
  
];

const ProjectCard = ({ project }) => {
  const handleCardClick = () => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <div
      className="relative flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl project-card cursor-default"
    >
      <div className="relative h-80">
        <img
          src={project.image.src}
          alt={project.title}
          className="w-full h-full object-contain transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 overlay">
          <h3 className="text-xl font-semibold text-white mb-3 text-center">
            {project.title}
          </h3>
          <p className="text-white text-sm text-justify px-4">
            {project.description}
          </p>
          <button
            onClick={handleCardClick}
            className="mt-4 px-5 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
          >
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const css = `
      .project-card {
        position: relative;
        overflow: hidden;
        transition: transform 0.3s, box-shadow 0.3s;
      }

      .project-card img {
        transition: opacity 0.3s;
      }

      .project-card:hover img {
        opacity: 0.3;
      }

      .project-card .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.8);
        opacity: 0;
        transition: opacity 0.3s;
      }

      .project-card:hover .overlay {
        opacity: 1;
      }

      .project-card .overlay h3,
      .project-card .overlay p {
        color: white;
      }

      .project-card .overlay button {
        border: 1px solid white;
        background: transparent;
        color: white;
        transition: background-color 0.3s, color 0.3s;
      }

      .project-card .overlay button:hover {
        background-color: white;
        color: black;
      }
    `;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.append(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24 px-4">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Medium to Large devices: Grid layout */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData
          .slice(0, showAll ? projectsData.length : 6)
          .map((project, index) => (
            <div key={index} className="w-full h-full">
              <ProjectCard project={project} />
            </div>
          ))}
      </div>

      {/* Small device: Carousel with buttons */}
      <div className="block md:hidden relative">
        <ProjectCard project={projectsData[currentIndex]} />
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={handlePrev}
            className="bg-white text-black p-2 rounded-full shadow-lg"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={handleNext}
            className="bg-white text-black p-2 rounded-full shadow-lg"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Load More / Show Less Button */}
      <div className="flex justify-center mt-8 hidden md:flex">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
