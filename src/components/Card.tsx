import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, children, className }) => {
  return (
    <motion.div
      className={`${styles.card} ${className ?? ''}`}
      initial={{ opacity: 0, y: 20, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotateX: 5, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
      whileTap={{ scale: 0.95 }}
    >
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.content}>{children}</div>
    </motion.div>
  );
};

export default Card;