import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Eduhunt</h1>
        <p className={styles.tagline}>Your pathway to educational success</p>
      </motion.header>

      <main className={styles.main}>
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h2>Explore Your Career Path</h2>
          <p>Discover detailed information about various career options and the exams required to achieve your goals.</p>
          <div className={styles.cardContainer}>
            <motion.div
              className={styles.featureCard}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>📚</span>
              </div>
              <h3>Study Resources</h3>
              <p>Access comprehensive study materials tailored to your chosen career path.</p>
            </motion.div>

            <motion.div
              className={styles.featureCard}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>🎯</span>
              </div>
              <h3>Career Guidance</h3>
              <p>Get expert advice to help you make informed decisions about your future.</p>
            </motion.div>

            <motion.div
              className={styles.featureCard}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>🚀</span>
              </div>
              <h3>Exam Preparation</h3>
              <p>Prepare effectively with tips and strategies for success in competitive exams.</p>
            </motion.div>
          </div>

          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/careers")}
          >
            Start Exploring
           </motion.button>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;