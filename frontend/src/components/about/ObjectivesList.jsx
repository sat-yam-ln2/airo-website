import React, { useState } from 'react';
import '../../styles/globals.css';

const ObjectiveItem = ({ number, title, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    cursor: 'pointer',
                    padding: 'var(--spacing-md)',
                    background: 'var(--terminal-black)',
                    border: '1px solid var(--terminal-gray)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <span className="font-mono" style={{ color: 'var(--electric-lime)' }}>[{number}] {title}</span>
                <span style={{ color: 'var(--console-gray)' }}>{isOpen ? '[-]' : '[+]'}</span>
            </div>
            {isOpen && (
                <div style={{
                    padding: 'var(--spacing-md)',
                    border: '1px solid var(--terminal-gray)',
                    borderTop: 'none',
                    color: 'var(--console-gray)',
                    fontFamily: 'Roboto Mono',
                    fontSize: '0.9rem'
                }}>
                    {details}
                </div>
            )}
        </div>
    );
};

const ObjectivesList = () => {
    const objectives = [
        { number: '01', title: 'Skill Development & Workshops', details: 'Regular workshops on Python, ML, and Robotics hardware.' },
        { number: '02', title: 'Innovation & Projects', details: 'Building real-world solutions and participating in competitions.' },
        { number: '03', title: 'Research & Collaboration', details: 'Fostering a culture of research and peer-to-peer learning.' },
    ];

    return (
        <section style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--dark-slate)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>OBJECTIVES</h2>
                {objectives.map((obj, index) => (
                    <ObjectiveItem key={index} {...obj} />
                ))}
            </div>
        </section>
    );
};

export default ObjectivesList;
