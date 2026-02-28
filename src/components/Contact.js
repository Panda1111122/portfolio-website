import React from 'react';
import styles from './Contact.module.css';
import { Mail, Linkedin } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact() {
    return (
        <footer className={styles.footer} id="contact">
            <div className="container">
                <div className={styles.contactCard}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Let's create something <span className="text-gradient">extraordinary.</span></h2>
                        <p className={styles.subtitle}>Currently seeking Summer & Fall 2025 Internship opportunities in Social Media Marketing & Strategy.</p>

                        <div className={styles.actions}>
                            <a href="mailto:divyansharora11062004@gmail.com" className="btn-primary">
                                Email Me <Mail size={18} style={{ marginLeft: '8px' }} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                LinkedIn <Linkedin size={18} style={{ marginLeft: '8px' }} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.brand}>DA.</div>
                    <p className={styles.copyright}>© {new Date().getFullYear()} Divyansh Arora. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
