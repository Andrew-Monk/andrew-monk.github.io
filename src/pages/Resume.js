import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
        <div className="w-1/4">
        <code className="text-yellow_vs">Education</code>
        </div>
        <div className="w-3/4">
          <div className="flex flex-col">
            <code className="text-blue_vs">Western Governers University</code>
            <code className="italic text-sm text-lightblue_vs mt-1">
              BS in Software Engineering
            </code>
            <code className="text-xs text-brown_vs mt-1">
              • July 2023 - Current
            </code>
          </div>
          <div className="flex flex-col mt-2">
            <code className="text-blue_vs">Hack Reactor</code>
            <code className="italic text-sm text-lightblue_vs mt-1">
              19-week web development certificate
            </code>
            <code className="text-xs text-brown_vs mt-1">
              • February 2023 - July 2023
            </code>
          </div>
          <div className="flex flex-col mt-2">
            <code className="text-blue_vs">Wallace State Community College</code>
            <code className="italic text-sm text-lightblue_vs mt-1">
              Proffesional Pilot Program
            </code>
            <code className="text-xs text-brown_vs mt-1">
              • January 2016 - January 2017
            </code>
          </div>
        </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <div className="flex flex-col mb-10">
              <code className="text-blue_vs">Tesla</code>
              <code className="italic text-sm text-lightblue_vs mb-2 mt-2">
                Birmingham, Alabama{" "}
              </code>
              <code className="text-xs text-brown_vs">• September 2019 - July 2022</code>
              <code className="text-sm">
                <br />• Reduced diagnostic time by 30% and increased vehicle uptime by 35% by developing automated
                      diagnostic tools using Toolbox article system.<br />
                <br />• Collaborated with software engineers and vehicle technicians
                      to develop a scalable diagnostic platform<br />
                <br />• Improved customer communication and relations with effective communication, and respectfully managing
                      customer expectations
              </code>
              </div>
              <code className="text-blue_vs">Melitta Professional Coffee Solutions</code>
              <br />
              <code className="italic text-sm text-lightblue_vs">
                Birmingham, Alabama{" "}
              </code>
              <br />
              <code className="text-xs text-brown_vs">• January 2018 - September 2019</code>
              <br />
              <code className="text-sm">
                <br />• Improved equipment reliability by 50% and reduced repair time by 40% by implementing a preventative
                      maintenance program<br />
                <br />• Worked collaboratively with customers and sales teams to provide excellent customer service<br />
              </code>
              <code className="text-blue_vs flex flex-col mt-10">United States Marine Corps</code>
              <code className="italic text-sm text-lightblue_vs">
                Birmingham, Alabama{" "}
              </code>
              <br />
              <code className="text-xs text-brown_vs">• August 2011 - August 2016</code>
              <br />
              <code className="text-sm">
                <br />• Maintained and repaired various types of equipment, including aviation electronics, utilizing wiring diagrams
                      and troubleshooting techniques to identify and solve technical issues<br />
                <br />• Conducted scheduled preventative maintenance, reducing equipment downtime by 30% and ensuring
                      mission readiness for multiple aircraft squadrons<br />
              </code>
            </div>
          </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Programming Languages: Python 3, JavaScript ES6+, SQL, HTML5, CSS
              <br />• Front-End: DOM manipulation, WebSockets, React, React Hooks, Redux Toolkit
              <br />• Back-End: Django 4, PostgreSQL, MongoDB, FastAPI, RabbitMQ
              <br />• System Design: Monoliths, Microservices, Domain-driven design, Message passing, Event sourcing
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
