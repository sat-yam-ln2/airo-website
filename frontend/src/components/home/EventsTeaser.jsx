import React from 'react';
import '../../styles/globals.css';

const EventCard = ({ title, date, description, type }) => (
    <div style={{
        position: 'relative',
        background: 'var(--terminal-black)',
        border: '1px solid var(--terminal-gray)',
        padding: 'var(--spacing-lg)',
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)', // Cyberpunk cut
        marginBottom: 'var(--spacing-lg)'
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: type === 'AI' ? 'var(--logo-blue)' : 'var(--logo-red)',
            color: 'white',
            padding: '4px 8px',
            fontSize: '0.8rem',
            fontWeight: 'bold'
        }}>
            {type}
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>{title}</h3>
        <div className="font-mono" style={{ color: 'var(--electric-lime)', marginBottom: 'var(--spacing-md)' }}>
            &gt; DATE: {date}
        </div>
        <p style={{ color: 'var(--console-gray)', marginBottom: 'var(--spacing-md)' }}>{description}</p>
        <a href="#" style={{ color: 'var(--logo-teal)', textDecoration: 'underline' }}>LEARN MORE &gt;</a>
    </div>
);

const EventsTeaser = () => {
    return (
        <section style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--matrix-black)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>

                <div>
                    <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>UPCOMING_EVENTS</h2>
                    <EventCard
                        title="AI.deate Hackathon"
                        date="2025-12-10"
                        description="A 24-hour hackathon to solve real-world problems using AI."
                        type="AI"
                    />
                    <EventCard
                        title="Race the Line"
                        date="2026-01-15"
                        description="Robotics competition: Build the fastest line-following robot."
                        type="ROBOTICS"
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--terminal-gray)', padding: 'var(--spacing-lg)' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--code-green)', marginBottom: 'var(--spacing-md)' }}>STAY UPDATED</h3>
                        <p style={{ marginBottom: 'var(--spacing-lg)' }}>Subscribe to our newsletter for the latest updates.</p>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <input type="email" placeholder="Enter email..." style={{
                                background: 'var(--terminal-black)',
                                border: '1px solid var(--terminal-gray)',
                                padding: '8px',
                                color: 'white',
                                fontFamily: 'Roboto Mono'
                            }} />
                            <button style={{
                                background: 'var(--logo-teal)',
                                color: 'black',
                                padding: '8px 16px',
                                fontWeight: 'bold'
                            }}>SUBMIT</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EventsTeaser;
