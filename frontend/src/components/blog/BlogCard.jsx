import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/globals.css';

const BlogCard = ({ id, title, excerpt, date, author, category, image }) => {
    const categoryColors = {
        AI: 'var(--logo-blue)',
        ROBOTICS: 'var(--logo-red)',
        IOT: 'var(--logo-teal)',
        EVENTS: 'var(--electric-lime)'
    };

    return (
        <div className="blog-card" style={{
            background: 'var(--terminal-black)',
            border: '1px solid var(--terminal-gray)',
            borderRadius: 'var(--border-radius-md)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}>
            <div style={{
                height: '200px',
                background: `url(${image}) center/cover no-repeat`,
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: categoryColors[category] || 'var(--terminal-gray)',
                    color: 'white',
                    padding: '4px 8px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    borderRadius: '4px'
                }}>
                    {category}
                </div>
            </div>
            <div style={{ padding: 'var(--spacing-md)' }}>
                <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: 'var(--spacing-sm)',
                    fontFamily: 'Roboto Mono'
                }}>
                    <Link to={`/blog/${id}`} style={{ color: 'var(--bright-white)' }}>{title}</Link>
                </h3>
                <p style={{ color: 'var(--console-gray)', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)' }}>
                    {excerpt}
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    color: 'var(--code-green)',
                    fontFamily: 'Roboto Mono'
                }}>
                    <span>{date}</span>
                    <span>{author}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
