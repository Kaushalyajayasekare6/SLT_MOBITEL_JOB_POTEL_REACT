import React from 'react';
import Header from '../components/Headers/Header';
import styles from '../assets/css/aboutus/aboutus.module.css';
import teamImage from '../assets/images/aboutus/2.png';

const AboutUs = () => {
  return (
    <div>
      <Header activePage="aboutus" />

      <main className={styles.aboutContainer}>
        <section className={styles.aboutHero}>
          <h1>About Us</h1>
        </section>

        <section className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Welcome to SLTMobitel, where innovation meets passion. Established with a commitment to
              advancing Sri Lanka's telecommunications infrastructure, we strive to deliver cutting-edge ICT
              solutions. Our dedicated team of professionals is driven by a shared vision: to connect people
              and businesses through reliable, high-speed networks. At SLTMobitel, we believe in empowering
              communities through technology. Join us on this exciting journey as we pioneer the future of
              digital connectivity in Sri Lanka.
            </p>
          </div>

          <div className={styles.aboutImage}>
            <img src={teamImage} alt="SLTMobitel Team" className={styles.aboutImg} />
          </div>
        </section>

        <div className={styles.learnMoreBtn}>
          <a href="#/jobcreation">Learn more</a>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
