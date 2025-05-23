import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Eduhunt</h3>
          <p className={styles.tagline}>Your pathway to educational success</p>
          <p className={styles.copyright}>© {new Date().getFullYear()} Eduhunt. All rights reserved.</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Connect With Us</h4>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><span>Facebook</span></a>
            <a href="#" aria-label="Twitter"><span>Twitter</span></a>
            <a href="#" aria-label="Instagram"><span>Instagram</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
