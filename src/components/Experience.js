import React from 'react';
import styles from './Experience.module.css';
import { Briefcase, Calendar } from 'lucide-react';
import Reveal from './Reveal';

const experiences = [
    {
        role: "Financial Analyst & Import Logistics Intern",
        company: "AR Fabrics Private Limited",
        period: "2023 – Present",
        points: [
            "Analyzed credit cycles, cash flow statements, and working capital for high-volume wholesale operations, contributing to a 15% improvement in financial reporting accuracy.",
            "Spearheaded the identification of high-quality supplier leads within the China-India trade corridor.",
            "Assisted in the critical migration of financial records from legacy manual ledgers to digital systems."
        ]
    },
    {
        role: "Operations & Social Outreach Intern",
        company: "Manjil NGO",
        period: "Oct 2024 – Jan 2025",
        points: [
            "Spearheaded digital storytelling initiatives focused on plantation drives and personalized learning.",
            "Designed and executed targeted outreach campaigns that expanded local footprint, increasing enrollment by 15%.",
            "Streamlined internal communication protocols and digitized record-keeping systems."
        ]
    }
];

export default function Experience() {
    return (
        <section className={`section ${styles.experience}`} id="experience">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Professional <span className="text-gradient">Experience</span></h2>
                    <p className="text-subtle">Bridging finance, logistics, and social outreach.</p>
                </div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={`glass-panel ${styles.card}`}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <div className={styles.companyMeta}>
                                        <span className={styles.company}><Briefcase size={14} /> {exp.company}</span>
                                        <span className={styles.period}><Calendar size={14} /> {exp.period}</span>
                                    </div>
                                </div>
                            </div>
                            <ul className={styles.points}>
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
