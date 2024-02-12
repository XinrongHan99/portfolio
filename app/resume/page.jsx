import { MarkGithubIcon, MailIcon, PersonIcon, LinkIcon } from '@primer/octicons-react';
import Link from "next/link";
import { Navigation } from "../components/nav";

import React from 'react';
import "./style.css";

function Resume() {
  return (
    <div>
      <Navigation />
      <a href="/Xinrong_Han_Resume.pdf" target="_blank" className='button absolute top-0 right-0 m-4 bg-black-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded border border-white'>
        View Resume
      </a>
    
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="flex flex-wrap -mx-3 text-zinc-500">
          <div className="w-full lg:w-1/2 px-3">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4 className='text-zinc-300'>Xinrong Han</h4>
              <p><em>Computer Science graduate skilled in developing user-centered, data-rich web applications using <b className='text-zinc-200'>React, Typescript, Golang, Java backend, and Python</b>. Proficient in deploying applications with Docker. Possess a robust understanding of distributed systems and a technical proficiency that combines with Agile methodologies for efficient, goal-oriented project execution.</em></p>
              <ul>
                <li>Los Angeles, 90012</li>
                <li>(213) 551-3083</li>
                <li>hanxinro@usc.edu</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Science in Computer Science</h4>
              <h5>2022 - 2024</h5>
              <p className='text-zinc-300'><em>University of Southern California (USC)</em></p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Engineering (Honors)</h4>
              <h4>Product Design and Manufacture</h4>
              <h5>2017 - 2021</h5>
              <p className='text-zinc-300'><em>University of Nottingham, Ningbo, China</em></p>
              <p>First Class Honours | Awarded Provost's Scholarship (top 1.5%) and Provincial Scholarship | GPA: 3.95 / 4.0</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>Software Engineer Intern</h4>
              <h5>2023.5 - 2023.8</h5>
              <p className='text-zinc-300'><em>Splunk Inc.   ,Seattle,WA</em></p>
              <p>Related skills: React, Typescript, Go, PostgreSQL, Docker, CI/CD, DevOps</p>
            </div>
            <div className="resume-item">
              <h4>Software Development Research Assistant</h4>
              <h5>2017 - 2018</h5>
              <p className='text-zinc-300'><em>HaRVI lab: Haptics Robotics and Virtual Interaction   ,Los Angeles,USA</em></p>
              <p>Related tools: React, Typescript, Electron JS</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
  }

  export default Resume;

