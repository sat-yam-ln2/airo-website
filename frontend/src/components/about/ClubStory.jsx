import React from 'react';
import '../../styles/globals.css';

const ClubStory = () => {
    return (
        <section style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--matrix-black)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>&gt; ABOUT_ISLINGTON_AIRO_CLUB</h2>

                <div className="font-mono" style={{ color: 'var(--bright-white)', marginBottom: 'var(--spacing-xl)' }}>
                    <p>
                        The Islington AIRO Club is a student-led initiative dedicated to exploring the frontiers of Artificial Intelligence, Robotics, and the Internet of Things. Founded in 2024, we aim to provide a platform for students to collaborate, innovate, and turn their ideas into reality.
                    </p>
                    <br />
                    <div style={{ borderLeft: '4px solid var(--code-green)', paddingLeft: 'var(--spacing-md)', fontStyle: 'italic', color: 'var(--console-gray)' }}>
            /* "Innovation meets collaboration" */
                    </div>
                    <br />
                    <p>
                        Our community is built on the belief that the best way to learn is by doing. Through workshops, hackathons, and research projects, we empower our members to gain practical skills and make a tangible impact.
                    </p>
                </div>

                <div style={{ border: '1px solid var(--terminal-gray)', padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius-md)' }}>
                    <h3 style={{ color: 'var(--logo-teal)', marginBottom: 'var(--spacing-md)' }}>TIMELINE</h3>
                    <ul className="font-mono" style={{ color: 'var(--console-gray)' }}>
                        <li>[2024] Club Founded</li>
                        <li>[2025] First AI Hackathon</li>
                        <li>[2025] Launched Mentorship Program</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ClubStory;
