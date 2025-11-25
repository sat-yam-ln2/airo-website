import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../styles/globals.css';

const FormStep3 = () => {
    const { register, watch } = useFormContext();
    const motivation = watch('motivation', '');

    return (
        <div>
            <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--logo-teal)' }}>&gt; MOTIVATION</h3>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <textarea
                    {...register('motivation', { required: 'Motivation is required', maxLength: 500 })}
                    placeholder="Why do you want to join AIRO?"
                    rows="6"
                    style={{
                        width: '100%',
                        padding: '12px',
                        background: 'var(--terminal-black)',
                        border: '1px solid var(--terminal-gray)',
                        color: 'var(--bright-white)',
                        fontFamily: 'Roboto Mono',
                        resize: 'none'
                    }}
                />
                <div style={{ textAlign: 'right', color: 'var(--console-gray)', fontSize: '0.8rem', marginTop: '4px' }}>
                    [{motivation.length}/500 CHARS]
                </div>
            </div>

            <div>
                <input
                    {...register('portfolio_link')}
                    placeholder="Portfolio Link (Optional)"
                    style={{
                        width: '100%',
                        padding: '12px',
                        background: 'var(--terminal-black)',
                        border: '1px solid var(--terminal-gray)',
                        color: 'var(--bright-white)',
                        fontFamily: 'Roboto Mono'
                    }}
                />
            </div>
        </div>
    );
};

export default FormStep3;
