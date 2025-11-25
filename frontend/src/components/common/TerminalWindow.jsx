import React from 'react';
import '../../styles/globals.css';

const TerminalWindow = ({ children, title = 'TERMINAL', className = '' }) => {
    return (
        <div className={`terminal-window ${className}`} style={{
            border: '2px solid var(--terminal-gray)',
            borderRadius: 'var(--border-radius-md)',
            background: 'var(--terminal-black)',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)',
            overflow: 'hidden',
            marginBottom: 'var(--spacing-lg)'
        }}>
            <div className="terminal-header" style={{
                background: '#1A1A1A',
                padding: '8px 12px',
                borderBottom: '1px solid var(--terminal-gray)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div className="terminal-dots" style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }}></div>
                </div>
                <div className="terminal-title font-mono" style={{ color: 'var(--console-gray)', fontSize: '0.8rem' }}>
                    {title}
                </div>
                <div style={{ width: '48px' }}></div> {/* Spacer for centering */}
            </div>
            <div className="terminal-body" style={{ padding: '20px' }}>
                {children}
            </div>
        </div>
    );
};

export default TerminalWindow;
