import React from "react";
import { Link } from "react-router-dom";
import Header2 from "../components/Headers/Header2";
import styles from "../assets/css/jobs/jobs.module.css";
import logo from "../assets/images/home/1.png";

const jobs = [
  {
    id: "network-engineer",
    title: "Trainee Network Engineers",
    description: `We  are   hiring   new   training   network   engineers   for 
          SLTMobitel,  Only   an  associate   degree,  a   bachelor’s  
          degree  in  computer  science,  information   technology, 
          computer engineering, or a related field  undergraduates  
          (3rd year, 4th year),  and fresh graduates  are  proffered.`,
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
    description: `Sri Lanka Telecom  is  in  search  of  high  caliber, result
oriented  and  qualified  individuals  capable of playing a 
key  role  in  the  finance  team. You will be engaged in a 
range  of  tasks  in  financial  accounting  in  a  highly IT
backed  work environment  and expected to collaborate 
with    subsidiary    companies    and    cross - functional 
departments  to  implement  key  business  drivers   and 
operational controls.`,
    requirements: [
      "Associate Membership of ICA/CIMA/ACCA",
      "Preference will be given to the candidates who are prize winners.",
      "Be a resilient leader with excellent interpersonal and communication skills.",
    ],
  },
  {
    id: "engineer",
    title: "Engineers",
    description: `As an Engineer of the pioneering ICT solutions provider, 
you will be a distinguished members of our team, which 
is mainly  responsible for planning, designing, operating 
and  maintaining  our  state of the art ICT infrastructure.`,
    requirements: [
      "Four-year Degree in BSc Engineering...",
      "Associate Member of the Institute of Engineers, Sri Lanka.",
      "Thorough knowledge in Data Centre Network Security, etc.",
    ],
  },
  {
    id: "technician",
    title: "Technicians",
    description: `Technicians  are  mainly  responsible  in  install, maintain 
and   repair   electronic  communications  equipment   in 
telecommunication    networks    and    internet    supply 
systems.  Examine  telecommunications  equipment and 
systems to find and repair faults. `,
    requirements: [
      "06 passes at the G.C.E. (O/L) exam...",
      "Should have obtained Skilled Competence Certificate - NAITA...",
    ],
  },
];

const Jobs = () => {
  return (
    <div>
  <Header2 logo={logo} />

  <div className={styles.titleContainer}>
    <h1 className={styles.jobsTitle}>Find Your Job that is prefer for you</h1>
  </div>

  <div className={styles.jobCategories}>
    {jobs.map((job) => (
      <div key={job.id} className={styles.jobCard}>
        <h3>{job.title}</h3>
        <p>{job.description}</p>
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

  <div className={styles.statusButtonContainer}>
    <Link to="/status" className={styles.statusBtn}>
      Check Application Status
    </Link>
  </div>
</div>

  );
};

export default Jobs;
