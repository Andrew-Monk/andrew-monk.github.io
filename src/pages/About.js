import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const Django = require("../assets/logos/Django.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const FastAPILogo = require("../assets/logos/FastAPI.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
  Welcome! As a dedicated and curious software engineer, I am passionate about finding innovative solutions to complex problems. Currently, I am pursuing a Bachelor of Science in Software Development at Western Governors University (WGU) to further enhance my knowledge and skills in this field. <br></br>
  
  <br></br>Prior to my transition into software engineering, I worked as a Virtual Diagnostics Technician at Tesla and as a Field Service Technician at Melitta Professional Coffee Solutions, where I gained valuable experience in troubleshooting, electrical repairs, and equipment maintenance. Before that, I served as a Support Equipment Technician in the United States Marine Corps, where I honed my skills in aviation electronics, equipment repair, and planned preventative maintenance.<br></br>

  <br></br>Throughout my career, I have developed a strong sense of discipline, attention to detail, and a commitment to delivering excellent results. I thrive in collaborative environments and have a track record of working effectively with colleagues and clients to deliver exceptional projects.<br></br>

  <br></br>In addition to my academic pursuits, I am also an active volunteer for the Microsoft TEALS program, where I contribute to promoting computer science education in schools and sharing my knowledge with the next generation of software developers.<br></br>

  <br></br>At Hack Reactor, I have gained expertise in HTML5, CSS, Python, Django, JavaScript, React.js, and front-end and back-end web development. I am excited to apply these skills to contribute to meaningful projects that push the boundaries of what is possible in software engineering.<br></br>

  <br></br>I am open to new opportunities and connections in the software engineering field. Please feel free to reach out if you would like to learn more about my skills and experience or connect professionally.<br></br>
</code>
          <br />
          <br />
          <code>Here are some of the technologies Ive used recently:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ReduxLogo}
                alt="Redux Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Redux</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={PythonLogo}
                alt="Python Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Python</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={PythonLogo}
                alt="Python Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>CSS</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={PythonLogo}
                alt="Python Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>HTML5</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={Django}
                alt="Python Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Django</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={Django}
                alt="Python Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>FastAPI</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={SqlLogo}
                alt="SQL Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>SQL</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>MongoDB</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={DockerLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Docker</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
