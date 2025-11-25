import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../styles/globals.css';

const FormStep1 = () => {
    const { register, formState: { errors } } = useFormContext();

    const inputStyle = {
        width: '100%',
        padding: '12px',
        background: 'var(--terminal-black)',
        border: '1px solid var(--terminal-gray)',
        color: 'var(--bright-white)',
        fontFamily: 'Roboto Mono',
        marginBottom: 'var(--spacing-md)',
        outline: 'none'
    };

    return (
        <div>
            <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--logo-teal)' }}>&gt; PERSONAL_INFO</h3>

            <input {...register('full_name', { required: 'Full Name is required' })} placeholder="Full Name" style={inputStyle} />
            {errors.full_name && <span className="text-error">{errors.full_name.message}</span>}

            <input {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} placeholder="Email Address" style={inputStyle} />
            {errors.email && <span className="text-error">{errors.email.message}</span>}

            <input {...register('phone', { required: 'Phone is required' })} placeholder="Phone Number" style={inputStyle} />
            {errors.phone && <span className="text-error">{errors.phone.message}</span>}

            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                <input {...register('student_id', { required: 'Student ID is required' })} placeholder="Student ID" style={inputStyle} />
                <input {...register('year_level', { required: 'Year/Level is required' })} placeholder="Year/Level" style={inputStyle} />
            </div>
        </div>
    );
};

export default FormStep1;
