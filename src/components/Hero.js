import React from 'react';
import styles from './Hero.module.css';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.badge}>
                    <Sparkles size={14} className={styles.badgeIcon} />
                    <span>Available for Summer & Fall '25</span>
                </div>

                <h1 className={styles.title}>
                    Social Media Marketing<br />
                    <span className="text-gradient">Strategist & AI Enthusiast</span>
                </h1>

                <p className={styles.subtitle}>
                    I'm Divyansh Arora, a business student leveraging data-driven content, generative AI, and financial analysis to build high-impact digital experiences.
                </p>

                <div className={styles.actions}>
                    <Link href="#projects" className="btn-primary">
                        View My Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </Link>
                    <Link href="#contact" className="btn-secondary">Let's Connect</Link>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>35%</span>
                        <span className={styles.statLabel}>Engagement Growth</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>15%</span>
                        <span className={styles.statLabel}>Efficiency using AI</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Digital Assets</span>
                    </div>
                </div>
            </div>

            {/* Dynamic Background Elements */}
            <div className={styles.glowItem1}></div>
            <div className={styles.glowItem2}></div>
        </section>
    );
}
