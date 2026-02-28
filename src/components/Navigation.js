"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    DA<span className="text-gradient">.</span>
                </Link>
                <div className={styles.links}>
                    <Link href="#experience" className={styles.link}>Experience</Link>
                    <Link href="#projects" className={styles.link}>Projects</Link>
                    <Link href="#skills" className={styles.link}>Skills</Link>
                    <Link href="#contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>Let's Talk</Link>
                </div>
            </div>
        </nav>
    );
}
