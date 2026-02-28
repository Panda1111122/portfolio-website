import React from 'react';
import styles from './Skills.module.css';
import { Code, Lightbulb, LineChart, PenTool } from 'lucide-react';
import Reveal from './Reveal';

const technicalSkills = ["AI Agent Development", "Prompt Engineering", "No-Code Tools", "Python (Basics)", "Marketing Analytics", "Adobe Creative Suite", "Bloomberg Terminal"];
const professionalSkills = ["Social Media Strategy", "Content Creation", "Ad Creative Production", "Stakeholder Management", "Event Coordination", "Digital Transformation", "Market Research", "Product Ideation"];

export default function Skills() {
    return (
        <section className={`section ${styles.skills}`} id="skills">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Capabilities & <span className="text-gradient">Skills</span></h2>
                    <p className="text-subtle">A blend of technical proficiency and absolute marketing finesse.</p>
                </div>

                <div className={styles.bentoGrid}>
                    <div className={`glass-panel ${styles.bentoBox} ${styles.boxTech}`}>
                        <div className={styles.boxHeader}>
                            <Code className={styles.boxIcon} size={28} />
                            <h3>Technical Stack</h3>
                        </div>
                        <div className={styles.tags}>
                            {technicalSkills.map((skill, idx) => (
                                <span key={idx} className={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className={`glass-panel ${styles.bentoBox} ${styles.boxPro}`}>
                        <div className={styles.boxHeader}>
                            <Lightbulb className={styles.boxIcon} size={28} />
                            <h3>Professional Finesse</h3>
                        </div>
                        <div className={styles.tags}>
                            {professionalSkills.map((skill, idx) => (
                                <span key={idx} className={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className={`glass-panel ${styles.bentoBox} ${styles.boxSmall1}`}>
                        <div className={styles.iconWrapper}>
                            <PenTool className={styles.boxIcon} size={24} />
                        </div>
                        <h3>Content Creation</h3>
                        <p className="text-subtle">Data-informed design that scales.</p>
                    </div>

                    <div className={`glass-panel ${styles.bentoBox} ${styles.boxSmall2}`}>
                        <div className={styles.iconWrapper}>
                            <LineChart className={styles.boxIcon} size={24} />
                        </div>
                        <h3>Strategy & Analytics</h3>
                        <p className="text-subtle">Measuring what matters most.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
