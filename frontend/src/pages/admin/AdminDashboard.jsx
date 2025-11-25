import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TerminalWindow from '../../components/common/TerminalWindow';
import api from '../../utils/api';
import '../../styles/globals.css';

const AdminDashboard = () => {
    const [member, setMember] = useState(null);
    const [posts, setPosts] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const steeringMember = localStorage.getItem('steeringMember');
        if (!steeringMember) {
            navigate('/admin/login');
            return;
        }
        setMember(JSON.parse(steeringMember));
        fetchPosts();
    }, [navigate]);

    const fetchPosts = async () => {
        try {
            const response = await api.get('blog/posts/');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('steeringMember');
        navigate('/admin/login');
    };

    const handleDeletePost = async (postId) => {
        if (!window.confirm('Are you sure you want to delete this post?')) return;

        try {
            await api.delete(`blog/posts/${postId}/`, {
                params: { member_id: member.id }
            });
            fetchPosts();
        } catch (error) {
            alert('Error deleting post: ' + (error.response?.data?.error || 'Unknown error'));
        }
    };

    if (!member) return null;

    return (
        <div style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--matrix-black)', minHeight: '100vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                    <h1 style={{ color: 'var(--electric-lime)' }}>ADMIN_DASHBOARD</h1>
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                        <span className="font-mono" style={{ color: 'var(--code-green)' }}>
                            {member.full_name} ({member.role})
                        </span>
                        <button
                            onClick={handleLogout}
                            style={{
                                background: 'var(--error-red)',
                                color: 'white',
                                padding: '8px 16px',
                                fontFamily: 'Roboto Mono',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            LOGOUT
                        </button>
                    </div>
                </div>

                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <button
                        onClick={() => navigate('/admin/create-post')}
                        style={{
                            background: 'var(--electric-lime)',
                            color: 'var(--matrix-black)',
                            padding: '12px 24px',
                            fontWeight: 'bold',
                            fontFamily: 'Roboto Mono',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        + CREATE NEW POST
                    </button>
                </div>

                <TerminalWindow title="BLOG_POSTS.db">
                    <h3 style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--logo-teal)' }}>Your Blog Posts</h3>
                    {posts.length === 0 ? (
                        <p style={{ color: 'var(--console-gray)' }}>No posts found. Create your first post!</p>
                    ) : (
                        <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                            {posts.map((post) => (
                                <div
                                    key={post.id}
                                    style={{
                                        padding: 'var(--spacing-md)',
                                        border: '1px solid var(--terminal-gray)',
                                        borderRadius: 'var(--border-radius-sm)',
                                        background: 'rgba(26, 35, 50, 0.3)'
                                    }}
                                >
                                    <h4 style={{ marginBottom: 'var(--spacing-sm)' }}>{post.title}</h4>
                                    <p style={{ color: 'var(--console-gray)', fontSize: '0.9rem', marginBottom: 'var(--spacing-sm)' }}>
                                        {post.excerpt}
                                    </p>
                                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
                                        <span className="font-mono" style={{ color: 'var(--code-green)', fontSize: '0.8rem' }}>
                                            {post.published_at}
                                        </span>
                                        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginLeft: 'auto' }}>
                                            <button
                                                onClick={() => navigate(`/admin/edit-post/${post.id}`)}
                                                style={{
                                                    background: 'var(--logo-teal)',
                                                    color: 'black',
                                                    padding: '4px 12px',
                                                    fontFamily: 'Roboto Mono',
                                                    fontSize: '0.8rem',
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                EDIT
                                            </button>
                                            <button
                                                onClick={() => handleDeletePost(post.id)}
                                                style={{
                                                    background: 'var(--error-red)',
                                                    color: 'white',
                                                    padding: '4px 12px',
                                                    fontFamily: 'Roboto Mono',
                                                    fontSize: '0.8rem',
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                DELETE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </TerminalWindow>
            </div>
        </div>
    );
};

export default AdminDashboard;
