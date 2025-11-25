import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../styles/globals.css';

const BlogPost = () => {
    const { id } = useParams();

    // Mock data - in real app, fetch by ID
    const post = {
        id,
        title: 'The Future of AI in 2025',
        author: 'John Doe',
        date: '2025-11-20',
        category: 'AI',
        content: `
# Introduction

Artificial Intelligence is rapidly evolving. In 2025, we are seeing...

## Key Trends

1. **Generative AI**: Creating content at scale.
2. **Robotics Integration**: AI-powered robots in daily life.

> "The best way to predict the future is to invent it."

## Conclusion

The future is bright for AI enthusiasts.
    `,
        image: 'https://via.placeholder.com/800x400'
    };

    return (
        <div className="blog-post-page" style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--matrix-black)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ marginBottom: 'var(--spacing-md)', fontFamily: 'Roboto Mono', color: 'var(--console-gray)' }}>
                    <Link to="/" style={{ color: 'var(--logo-teal)' }}>HOME</Link> &gt; <Link to="/blog" style={{ color: 'var(--logo-teal)' }}>BLOG</Link> &gt; [{post.category}]
                </div>

                <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>{post.title}</h1>

                <div style={{
                    display: 'flex',
                    gap: 'var(--spacing-lg)',
                    fontFamily: 'Roboto Mono',
                    color: 'var(--code-green)',
                    marginBottom: 'var(--spacing-lg)',
                    borderBottom: '1px solid var(--terminal-gray)',
                    paddingBottom: 'var(--spacing-md)'
                }}>
                    <span>AUTHOR: {post.author}</span>
                    <span>DATE: {post.date}</span>
                </div>

                <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-lg)' }} />

                <div className="markdown-content" style={{ color: 'var(--bright-white)', lineHeight: '1.8' }}>
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
