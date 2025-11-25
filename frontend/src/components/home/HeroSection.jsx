import React from 'react';
import MatrixRain from '../common/MatrixRain';
import '../../styles/animations.css';

const HeroSection = () => {
    return (
        <section style={{
            position: 'relative',
            height: 'calc(100vh - 80px)', // Adjust for navbar
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderBottom: '1px solid var(--terminal-gray)'
        }}>
            <MatrixRain />

            <div style={{
                textAlign: 'center',
                zIndex: 1,
                padding: 'var(--spacing-lg)'
            }}>
                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <img src="/assets/logo.png" alt="AIRO Logo" style={{ width: '150px', height: 'auto', marginBottom: 'var(--spacing-md)' }} />
                </div>

                <h1 className="font-mono" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                    Islington AIRO Club <span className="animate-blink">_</span>
                </h1>

                <p className="font-mono" style={{ color: 'var(--logo-teal)', fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)' }}>
          // AI, Robotics & IoT Innovation Community
                </p>

                <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
                    <button style={{
                        background: 'var(--electric-lime)',
                        color: 'var(--matrix-black)',
                        padding: '12px 32px',
                        borderRadius: 'var(--border-radius-sm)',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        border: '2px solid var(--electric-lime)',
                        transition: 'all 0.3s ease'
                    }}>
                        JOIN THE COMMUNITY
                    </button>

                    <button style={{
                        background: 'transparent',
                        color: 'var(--electric-lime)',
                        padding: '12px 32px',
                        borderRadius: 'var(--border-radius-sm)',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        border: '2px solid var(--electric-lime)',
                        transition: 'all 0.3s ease'
                    }}>
                        EXPLORE PROJECTS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
