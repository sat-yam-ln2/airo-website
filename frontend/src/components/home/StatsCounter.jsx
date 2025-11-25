import React from 'react';
import '../../styles/globals.css';

const StatItem = ({ count, label }) => (
    <div style={{ textAlign: 'center' }}>
        <div className="font-mono" style={{ fontSize: '3rem', color: 'var(--electric-lime)', fontWeight: 'bold' }}>
            {count}
        </div>
        <div style={{ color: 'var(--console-gray)', letterSpacing: '2px' }}>[ {label} ]</div>
    </div>
);

const StatsCounter = () => {
    return (
        <section style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--terminal-black)', borderTop: '1px solid var(--terminal-gray)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 'var(--spacing-lg)' }}>
                <StatItem count="075+" label="MEMBERS" />
                <StatItem count="020+" label="PROJECTS" />
                <StatItem count="050+" label="WORKSHOPS" />
                <StatItem count="010+" label="COMPETITIONS" />
            </div>
        </section>
    );
};

export default StatsCounter;
