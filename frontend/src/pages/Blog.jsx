import React, { useState, useEffect } from 'react';
import SearchBar from '../components/blog/SearchBar';
import CategoryFilter from '../components/blog/CategoryFilter';
import BlogGrid from '../components/blog/BlogGrid';
import api from '../utils/api';
import '../styles/globals.css';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('blog/posts/');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
                // Fallback to mock data if API fails (for demo purposes)
                setPosts([
                    { id: 1, title: 'The Future of AI in 2025', excerpt: 'Exploring the latest trends in artificial intelligence...', date: '2025-11-20', author: 'John Doe', category: 'AI', image: 'https://via.placeholder.com/300' },
                    { id: 2, title: 'Building Your First Robot', excerpt: 'A step-by-step guide to robotics for beginners...', date: '2025-11-18', author: 'Jane Smith', category: 'ROBOTICS', image: 'https://via.placeholder.com/300' },
                    { id: 3, title: 'IoT Security Best Practices', excerpt: 'How to secure your connected devices...', date: '2025-11-15', author: 'Alice Johnson', category: 'IOT', image: 'https://via.placeholder.com/300' },
                    { id: 4, title: 'Hackathon Recap: AI.deate', excerpt: 'Highlights from our recent hackathon...', date: '2025-11-10', author: 'Bob Brown', category: 'EVENTS', image: 'https://via.placeholder.com/300' },
                ]);
            }
        };
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="blog-page" style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--matrix-black)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1 className="font-mono" style={{ color: 'var(--electric-lime)', marginBottom: 'var(--spacing-xl)' }}>&gt; BLOG_POSTS <span className="animate-blink">_</span></h1>

                <SearchBar onSearch={setSearchTerm} />
                <CategoryFilter
                    categories={['AI', 'ROBOTICS', 'IOT', 'EVENTS']}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                <BlogGrid posts={filteredPosts} />
            </div>
        </div>
    );
};

export default Blog;
