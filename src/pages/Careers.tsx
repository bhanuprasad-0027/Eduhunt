import { Link } from 'react-router-dom';
import { careerPaths } from '../data/careers';
import styles from '../styles/Careers.module.css';
import { motion } from 'framer-motion';

const Careers = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={styles.pageWrapper}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className={styles.pageTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Explore Career Paths
        </motion.h1>

        <motion.p
          className={styles.pageDescription}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Discover various career options and find detailed information about exams, courses, and job opportunities in each field.
        </motion.p>

        <motion.ul
          className={styles.careerList}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {careerPaths.map((career) => (
            <motion.li
              key={career.id}
              className={styles.careerItem}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 150, 136, 0.2)'
              }}
            >
              <div className={styles.cardContent}>
                <h2 className={styles.careerTitle}>{career.name}</h2>
                <p className={styles.careerDescription}>{career.description}</p>
                <Link to={`/careers/${career.id}`} className={styles.learnMoreLink}>
                  Learn more →
                </Link>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Careers;
