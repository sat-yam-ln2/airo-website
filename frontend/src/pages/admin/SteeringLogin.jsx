import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalWindow from '../../components/common/TerminalWindow';
import api from '../../utils/api';
import '../../styles/globals.css';

const SteeringLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await api.post('members/members/login/', { username, password });
            if (response.data.success) {
                // Store member data in localStorage
                localStorage.setItem('steeringMember', JSON.stringify(response.data.member));
                navigate('/admin/dashboard');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div style={{
            padding: 'var(--spacing-xxl) var(--spacing-lg)',
            background: 'var(--matrix-black)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ maxWidth: '500px', width: '100%' }}>
                <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', color: 'var(--electric-lime)' }}>
                    STEERING_MEMBER_LOGIN
                </h1>

                <TerminalWindow title="LOGIN.exe">
                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', color: 'var(--code-green)' }}>
                                &gt; USERNAME:
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'var(--matrix-black)',
                                    border: '1px solid var(--terminal-gray)',
                                    color: 'var(--bright-white)',
                                    fontFamily: 'Roboto Mono'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', color: 'var(--code-green)' }}>
                                &gt; PASSWORD:
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'var(--matrix-black)',
                                    border: '1px solid var(--terminal-gray)',
                                    color: 'var(--bright-white)',
                                    fontFamily: 'Roboto Mono'
                                }}
                            />
                        </div>

                        {error && (
                            <div style={{
                                marginBottom: 'var(--spacing-md)',
                                padding: 'var(--spacing-sm)',
                                background: 'rgba(255, 0, 0, 0.1)',
                                border: '1px solid var(--error-red)',
                                color: 'var(--error-red)',
                                fontFamily: 'Roboto Mono'
                            }}>
                                ERROR: {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'var(--electric-lime)',
                                color: 'var(--matrix-black)',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto Mono',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            LOGIN &gt;
                        </button>
                    </form>
                </TerminalWindow>
            </div>
        </div>
    );
};

export default SteeringLogin;
