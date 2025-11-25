import React from 'react';
import '../../styles/globals.css';

const LeaderCard = ({ name, role, image }) => (
    <div style={{
        minWidth: '250px',
        background: 'var(--terminal-black)',
        border: '1px solid var(--terminal-gray)',
        borderRadius: 'var(--border-radius-md)',
        overflow: 'hidden',
        marginRight: 'var(--spacing-lg)'
    }}>
        <div style={{
            height: '200px',
            background: `url(${image}) center/cover no-repeat`,
            filter: 'grayscale(100%) sepia(100%) hue-rotate(50deg) saturate(300%)', // Green tint
            borderBottom: '1px solid var(--code-green)'
        }}></div>
        <div style={{ padding: 'var(--spacing-md)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{name}</h3>
            <div style={{ color: 'var(--code-green)', fontSize: '0.8rem', fontFamily: 'Roboto Mono', marginBottom: '8px' }}>
                {role}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--console-gray)' }}>
                ==========
            </div>
        </div>
    </div>
);

const LeadershipCarousel = () => {
    const leaders = [
        { name: 'John Doe', role: 'President', image: 'https://via.placeholder.com/250' },
        { name: 'Jane Smith', role: 'Tech Lead', image: 'https://via.placeholder.com/250' },
        { name: 'Alice Johnson', role: 'Event Coordinator', image: 'https://via.placeholder.com/250' },
        { name: 'Bob Brown', role: 'Secretary', image: 'https://via.placeholder.com/250' },
    ];

    return (
        <section style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--dark-slate)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>LEADERSHIP_TEAM</h2>

                <div style={{
                    display: 'flex',
                    overflowX: 'auto',
                    paddingBottom: 'var(--spacing-md)',
                    scrollbarWidth: 'thin'
                }}>
                    {leaders.map((leader, index) => (
                        <LeaderCard key={index} {...leader} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipCarousel;
