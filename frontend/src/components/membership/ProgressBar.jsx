import React from 'react';
import '../../styles/globals.css';

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 'var(--spacing-sm)',
                fontFamily: 'Roboto Mono',
                fontSize: '0.9rem',
                color: 'var(--console-gray)'
            }}>
                <span>[==&gt;    ]</span>
                <span>Step {currentStep}/{totalSteps}</span>
            </div>
            <div style={{
                width: '100%',
                height: '4px',
                background: 'var(--terminal-gray)',
                borderRadius: '2px'
            }}>
                <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: 'var(--electric-lime)',
                    borderRadius: '2px',
                    transition: 'width 0.3s ease'
                }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
