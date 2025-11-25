import React from 'react';
import TerminalWindow from '../common/TerminalWindow';
import '../../styles/globals.css';

const MentorCard = ({ name, role }) => (
    <TerminalWindow title={`MENTOR: ${name}`}>
        <div style={{ textAlign: 'center' }}>
            <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'var(--terminal-gray)',
                margin: '0 auto var(--spacing-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <span className="material-icons" style={{ fontSize: '3rem', color: 'var(--logo-teal)' }}>school</span>
            </div>
            <h3 style={{ color: 'var(--bright-white)', marginBottom: 'var(--spacing-xs)' }}>{name}</h3>
            <p className="font-mono" style={{ color: 'var(--logo-teal)' }}>{role}</p>
        </div>
    </TerminalWindow>
);

const MentorsSection = () => {
    return (
        <section style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--matrix-black)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>OUR_MENTORS</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                    <MentorCard name="Shishir Subedi" role="Club Mentor" />
                    <MentorCard name="Alish KC" role="Technical Advisor" />
                </div>
            </div>
        </section>
    );
};

export default MentorsSection;
