import { useParams, Link } from 'react-router-dom';
import { careerPaths } from '../data/careers';
import styles from '../styles/CareerDetail.module.css';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const CareerDetail = () => {
  const { careerId } = useParams<{ careerId: string }>();
  const career = careerPaths.find((c) => c.id === careerId);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  if (!career) {
    return (
      <div className={styles.pageWrapper}>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Career not found</h2>
          <Link to="/careers" className={styles.backLink}>
            <FaArrowLeft className={styles.backIcon} /> Back to Careers
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className={styles.headerSection} variants={item}>
          <Link to="/careers" className={styles.backLink}>
            <FaArrowLeft className={styles.backIcon} /> Back to Careers
          </Link>
          <h1 className={styles.careerTitle}>{career.name}</h1>
          <p className={styles.description}>{career.description}</p>
        </motion.div>

        <motion.div variants={item}>
          <Card title="Exams Required" className={styles.cardSpacing}>
            <ul className={styles.list}>
              {career.exams.map((exam, index) => (
                <motion.li
                  key={exam.name}
                  className={styles.listItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                >
                  <div className={styles.examHeader}>
                    <strong>{exam.name}</strong>
                  </div>
                  <p>{exam.description}</p>
                  <a
                    href={exam.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Visit Official Website
                  </a>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card title="Job Opportunities" className={styles.cardSpacing}>
            <ul className={styles.list}>
              {career.jobTypes.map((job, index) => (
                <motion.li
                  key={job.title}
                  className={styles.listItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                >
                  <div className={styles.jobHeader}>
                    <strong>{job.title}</strong>
                  </div>
                  <p>{job.description}</p>
                  {job.averageSalary && (
                    <div className={styles.salaryInfo}>
                      <span>Average Salary:</span> {job.averageSalary}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CareerDetail;