import React from 'react';
import styles from './Projects.module.css';
import { Megaphone, Bot, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const projects = [
    {
        icon: <Megaphone size={24} />,
        title: "Amity Int. Business School",
        subtitle: "Social Media Marketing Lead (INBUSH 2025)",
        points: [
            "Architected the end-to-end digital roadmap for one of Asia's largest business summits.",
            "Achieved a 35% increase in organic engagement across LinkedIn and Instagram.",
            "Produced 50+ high-fidelity digital assets, including video edits and ad creatives."
        ],
        color: "var(--accent-primary)"
    },
    {
        icon: <Bot size={24} />,
        title: "AI Workflow Development",
        subtitle: "Independent Research & Passion Project",
        points: [
            "Researched and developed Custom AI Agents and automated workflows.",
            "Designed experimental No-Code frameworks for high-conversion ad prompt generation.",
            "Applied advanced prompting techniques to build consistent content generation pipelines."
        ],
        color: "var(--accent-secondary)"
    }
];

export default function Projects() {
    return (
        <section className={`section ${styles.projects}`} id="projects">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Leadership & <span className="text-gradient">Projects</span></h2>
                    <p className="text-subtle">Driving marketing strategies and AI innovation.</p>
                </div>

                <div className={styles.grid}>
                    {projects.map((proj, idx) => (
                        <div key={idx} className={`glass-panel ${styles.card}`}>
                            <div className={styles.iconBox} style={{ color: proj.color }}>
                                {proj.icon}
                            </div>
                            <h3 className={styles.title}>{proj.title}</h3>
                            <h4 className={styles.subtitle}>{proj.subtitle}</h4>
                            <ul className={styles.points}>
                                {proj.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <div className={styles.arrow}>
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
