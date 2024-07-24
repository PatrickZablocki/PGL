import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header_container}>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}><a href="#about-me" className={styles.nav_link}>About Me</a></li>
                    <li className={styles.nav_item}><a href="#huntshowdown" className={styles.nav_link}>HuntShowdown</a></li>
                    <li className={styles.nav_item}><a href="#predecessor" className={styles.nav_link}>Predecessor</a></li>
                    <li className={styles.nav_item}><a href="#contact-me" className={styles.nav_link}>Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
