import React from 'react';
import '../../styles/globals.css';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--matrix-black)',
            borderTop: '1px solid var(--terminal-gray)',
            padding: 'var(--spacing-xl) var(--spacing-lg)',
            marginTop: 'auto'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--spacing-lg)'
            }}>
                <div>
                    <h3 style={{ color: 'var(--code-green)', marginBottom: 'var(--spacing-md)' }}>ISLINGTON AIRO CLUB</h3>
                    <p className="font-mono" style={{ color: 'var(--console-gray)', fontSize: '0.9rem' }}>
                        Innovating the future through AI, Robotics, and IoT.
                    </p>
                </div>

                <div>
                    <h4 style={{ color: 'var(--bright-white)', marginBottom: 'var(--spacing-md)' }}>CONNECT</h4>
                    <ul className="font-mono" style={{ color: 'var(--console-gray)' }}>
                        <li style={{ marginBottom: '8px' }}>{'>'} CONNECT --platform=instagram</li>
                        <li style={{ marginBottom: '8px' }}>{'>'} CONNECT --platform=linkedin</li>
                        <li style={{ marginBottom: '8px' }}>{'>'} MAIL --to=contact@airo.club</li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: 'var(--bright-white)', marginBottom: 'var(--spacing-md)' }}>LEGAL</h4>
                    <ul className="font-mono" style={{ color: 'var(--console-gray)' }}>
                        <li style={{ marginBottom: '8px' }}>{'>'} VIEW_TERMS</li>
                        <li style={{ marginBottom: '8px' }}>{'>'} VIEW_PRIVACY</li>
                    </ul>
                </div>
            </div>
            <div style={{
                textAlign: 'center',
                marginTop: 'var(--spacing-xl)',
                paddingTop: 'var(--spacing-md)',
                borderTop: '1px dashed var(--terminal-gray)',
                color: 'var(--console-gray)',
                fontFamily: 'Roboto Mono',
                fontSize: '0.8rem'
            }}>
                © 2025 Islington AIRO Club // All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
