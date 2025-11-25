import React from 'react';
import BlogCard from './BlogCard';
import '../../styles/globals.css';

const BlogGrid = ({ posts }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)'
        }}>
            {posts.map((post) => (
                <BlogCard key={post.id} {...post} />
            ))}
        </div>
    );
};

export default BlogGrid;
