import React from "react";
import { Link } from "react-router-dom";
import Header2 from "../components/Header2";
import styles from "../assets/css/jobs/jobs.module.css";
import logo from "../assets/images/home/1.png";

const jobs = [
  {
    id: "network-engineer",
    title: "Trainee Network Engineers",
    description: `We are hiring new training network engineers for SLTMobitel...`,
    requirements: [
      "No job experiences are needed.",
      "Networking knowledge",
      "Operating systems knowledge",
      "Network devices and security knowledge",
      "Networking device configuration knowledge",
    ],
  },
  {
    id: "accountant",
    title: "Accountant – Financial Accounting",
    description: `Sri Lanka Telecom is in search of high caliber...`,
    requirements: [
      "Associate Membership of ICA/CIMA/ACCA",
      "Preference will be given to the candidates who are prize winners.",
      "Be a resilient leader with excellent interpersonal and communication skills.",
    ],
  },
  {
    id: "engineer",
    title: "Engineers",
    description: `As an Engineer of the pioneering ICT solutions provider...`,
    requirements: [
      "Four-year Degree in BSc Engineering...",
      "Associate Member of the Institute of Engineers, Sri Lanka.",
      "Thorough knowledge in Data Centre Network Security, etc.",
    ],
  },
  {
    id: "technician",
    title: "Technicians",
    description: `Technicians are mainly responsible to install, maintain...`,
    requirements: [
      "06 passes at the G.C.E. (O/L) exam...",
      "Should have obtained Skilled Competence Certificate - NAITA...",
    ],
  },
];

const Jobs = () => {
  return (
    <div className={styles.jobCategories}>
      <Header2 logo={logo} />

      {jobs.map((job) => (
        <div key={job.id} className={styles.jobCard}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <b>Requirements:</b>
          <ul>
            {job.requirements.map((req, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: req }}></li>
            ))}
          </ul>
          <Link to={`/apply?job=${job.id}`} className={styles.applyBtn}>
            Apply Now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
