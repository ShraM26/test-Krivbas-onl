import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaViber, FaTwitter } from 'react-icons/fa';

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>ФА Кривбас</h1>
      </div>
      <nav className={styles.nav}>
       
        <div className={styles.cntInfo}>
          <a href="tel:+38097777777" className={styles.contactItem}>+380(97)-777-77-77</a>
                  <a href="mailto:info@example.com" className={styles.contactItem}>AK-2020@gmail.com</a>
                  </div>
          <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaTelegramPlane className={styles.icon} />
          </a>
          <a href="viber://chat?number=%2B123456789" className={styles.socialLink}>
            <FaViber className={styles.icon} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaTwitter className={styles.icon} />
          </a>
        
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FaInstagram className={styles.icon} />
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FaFacebookF className={styles.icon} />
              </a>
               <button onClick={() => navigate(-1)} className={styles.backButton}>
          Назад
        </button>
      </nav>
    </header>
  );
}

export default Header;