'use client'
import React from 'react'
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
        <div className={styles.headerContainer}>
            <h1 className={styles.logo}>TaskManagement.ai</h1>
        </div>
    </header>
    )
}

export default Header;