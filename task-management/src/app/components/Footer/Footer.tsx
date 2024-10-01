import React from 'react';
import styles from './Footer.module.css';  // Use "styles" object to import module CSS

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>  {/* Use className={styles.footer} */}
            <h3>
                TaskManager ©
            </h3>
        </footer>
    );
};

export default Footer
