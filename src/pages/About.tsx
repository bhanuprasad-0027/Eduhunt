import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <div className={styles.pageWrapper}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          custom={0}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          About Eduhunt
        </motion.h1>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.textContent}
            custom={1}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <p>
              Eduhunt is a comprehensive platform designed to guide students and professionals through various career paths and exam preparations. Our goal is to provide detailed information about different careers, the exams required to pursue them, and the job opportunities available.
            </p>
            <p>
              Whether you are exploring government jobs, vocational courses, healthcare, or creative arts, Eduhunt offers resources and insights to help you make informed decisions and succeed in your chosen field.
            </p>
            <p>
              We aim to empower learners with the knowledge and tools they need to achieve their career goals and excel in competitive exams.
            </p>
          </motion.div>

          <motion.div
            className={styles.featuresSection}
            custom={2}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>💡</div>
              <h3>Career Exploration</h3>
              <p>Discover diverse career paths and requirements</p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Exam Insights</h3>
              <p>Comprehensive guides for competitive exams</p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🎓</div>
              <h3>Learning Resources</h3>
              <p>Access to quality study materials and tips</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.missionSection}
          custom={3}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h2>Our Mission</h2>
          <p>
            At Eduhunt, we believe that everyone deserves access to quality educational guidance. Our mission is to democratize career information and exam preparation, making it accessible to all learners regardless of their background or location.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
