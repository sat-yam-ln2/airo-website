import React from 'react';
import '../../styles/globals.css';

const ActivityCard = ({ icon, title, description }) => (
    <div className="activity-card" style={{
        border: '1px solid var(--terminal-gray)',
        padding: 'var(--spacing-lg)',
        borderRadius: 'var(--border-radius-md)',
        background: 'rgba(26, 35, 50, 0.5)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    }}>
        <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>{icon}</div>
        <h3 style={{ color: 'var(--logo-teal)', fontSize: '1.2rem', marginBottom: 'var(--spacing-sm)' }}>{title}</h3>
        <p className="font-mono" style={{ color: 'var(--console-gray)', fontSize: '0.9rem' }}>{description}</p>
    </div>
);

const ActivitiesGrid = () => {
    const activities = [
        {
            icon: <span className="material-icons" style={{ fontSize: '3rem', color: 'var(--logo-teal)' }}>build</span>,
            title: 'Workshops',
            description: 'Hands-on sessions on Python, AI models, Arduino, and more.'
        },
        {
            icon: <span className="material-icons" style={{ fontSize: '3rem', color: 'var(--logo-red)' }}>smart_toy</span>,
            title: 'Robotics',
            description: 'Build and program robots to solve complex challenges.'
        },
        {
            icon: <span className="material-icons" style={{ fontSize: '3rem', color: 'var(--electric-lime)' }}>lightbulb</span>,
            title: 'Innovation',
            description: 'Collaborate on innovative projects and hackathons.'
        },
        {
            icon: <span className="material-icons" style={{ fontSize: '3rem', color: 'var(--logo-blue)' }}>science</span>,
            title: 'Research',
            description: 'Deep dive into AI research and publish papers.'
        }
    ];

    return (
        <section style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--matrix-black)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <span style={{ color: 'var(--code-green)' }}>&lt;</span> CORE_ACTIVITIES <span style={{ color: 'var(--code-green)' }}>/&gt;</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {activities.map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivitiesGrid;
