import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/globals.css';

const Navbar = ({ onJoinClick }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'HOME' },
        { path: '/about', label: 'ABOUT' },
        { path: '/blog', label: 'BLOG' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            background: 'rgba(13, 17, 23, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--terminal-gray)',
            padding: 'var(--spacing-md) var(--spacing-lg)'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--bright-white)' }} className="font-condensed">
                    ISLINGTON_<span style={{ color: 'var(--logo-teal)' }}>AIRO</span>_CLUB
                </Link>

                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none',
                        flexDirection: 'column',
                        gap: '4px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px'
                    }}
                    className="mobile-hamburger"
                >
                    <span style={{ display: 'block', width: '25px', height: '3px', background: 'var(--electric-lime)' }}></span>
                    <span style={{ display: 'block', width: '25px', height: '3px', background: 'var(--electric-lime)' }}></span>
                    <span style={{ display: 'block', width: '25px', height: '3px', background: 'var(--electric-lime)' }}></span>
                </button>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{
                    display: 'flex',
                    gap: 'var(--spacing-lg)',
                    alignItems: 'center'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="font-mono"
                            style={{
                                color: isActive(link.path) ? 'var(--code-green)' : 'var(--bright-white)',
                                textDecoration: isActive(link.path) ? 'underline' : 'none',
                                textUnderlineOffset: '4px'
                            }}
                        >
                            {`> ${link.label}`}
                        </Link>
                    ))}
                    <button
                        onClick={onJoinClick}
                        style={{
                            background: 'var(--electric-lime)',
                            color: 'var(--matrix-black)',
                            padding: '8px 16px',
                            borderRadius: 'var(--border-radius-sm)',
                            fontWeight: 'bold',
                            fontFamily: 'Roboto Mono'
                        }}>
                        JOIN_US
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu" style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'rgba(13, 17, 23, 0.98)',
                        borderBottom: '1px solid var(--terminal-gray)',
                        padding: 'var(--spacing-lg)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-md)'
                    }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="font-mono"
                                onClick={() => setIsOpen(false)}
                                style={{
                                    color: isActive(link.path) ? 'var(--code-green)' : 'var(--bright-white)',
                                    textDecoration: isActive(link.path) ? 'underline' : 'none',
                                    padding: '8px 0'
                                }}
                            >
                                {`> ${link.label}`}
                            </Link>
                        ))}
                        <button
                            onClick={() => { onJoinClick(); setIsOpen(false); }}
                            style={{
                                background: 'var(--electric-lime)',
                                color: 'var(--matrix-black)',
                                padding: '12px 16px',
                                borderRadius: 'var(--border-radius-sm)',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto Mono',
                                marginTop: '8px'
                            }}>
                            JOIN_US
                        </button>
                    </div>
                )}
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
