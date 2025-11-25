import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../styles/globals.css';

const FormStep2 = () => {
    const { register } = useFormContext();

    return (
        <div>
            <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--logo-teal)' }}>&gt; SKILLS_&_INTERESTS</h3>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', color: 'var(--console-gray)' }}>Primary Interest:</label>
                <select {...register('skill_category')} style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--terminal-black)',
                    border: '1px solid var(--terminal-gray)',
                    color: 'var(--bright-white)',
                    fontFamily: 'Roboto Mono'
                }}>
                    <option value="ai">AI Skills</option>
                    <option value="robotics">Robotics/IoT Skills</option>
                    <option value="content">Digital Content/Editing</option>
                    <option value="research">Research & Writing</option>
                </select>
            </div>

            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', color: 'var(--console-gray)' }}>Experience Level:</label>
                <select {...register('skill_level')} style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--terminal-black)',
                    border: '1px solid var(--terminal-gray)',
                    color: 'var(--bright-white)',
                    fontFamily: 'Roboto Mono'
                }}>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', color: 'var(--console-gray)' }}>Hours per Month:</label>
                <input type="range" min="1" max="20" {...register('hours_per_month')} style={{ width: '100%' }} />
            </div>
        </div>
    );
};

export default FormStep2;
