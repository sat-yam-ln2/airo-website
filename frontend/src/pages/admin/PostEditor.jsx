import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TerminalWindow from '../../components/common/TerminalWindow';
import api from '../../utils/api';
import '../../styles/globals.css';

const PostEditor = () => {
    const { id } = useParams();
    const [member, setMember] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category_id: '',
        is_featured: false
    });
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const isEditMode = !!id;

    useEffect(() => {
        const steeringMember = localStorage.getItem('steeringMember');
        if (!steeringMember) {
            navigate('/admin/login');
            return;
        }
        setMember(JSON.parse(steeringMember));
        fetchCategories();

        if (isEditMode) {
            fetchPost();
        }
    }, [id, navigate]);

    const fetchCategories = async () => {
        try {
            const response = await api.get('blog/categories/');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchPost = async () => {
        try {
            const response = await api.get(`blog/posts/${id}/`);
            setFormData({
                title: response.data.title,
                excerpt: response.data.excerpt,
                content: response.data.content,
                category_id: response.data.category.id,
                is_featured: response.data.is_featured
            });
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postData = {
                ...formData,
                member_id: member.id
            };

            if (isEditMode) {
                await api.put(`blog/posts/${id}/`, postData);
                alert('Post updated successfully!');
            } else {
                await api.post('blog/posts/', postData);
                alert('Post created successfully!');
            }

            navigate('/admin/dashboard');
        } catch (error) {
            alert('Error saving post: ' + (error.response?.data?.error || 'Unknown error'));
        }
    };

    if (!member) return null;

    return (
        <div style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--matrix-black)', minHeight: '100vh' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--electric-lime)' }}>
                    {isEditMode ? 'EDIT_POST' : 'CREATE_NEW_POST'}
                </h1>

                <TerminalWindow title="POST_EDITOR.exe">
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', color: 'var(--code-green)' }}>
                                &gt; TITLE:
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                                &gt; CATEGORY:
                            </label>
                            <select
                                value={formData.category_id}
                                onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'var(--matrix-black)',
                                    border: '1px solid var(--terminal-gray)',
                                    color: 'var(--bright-white)',
                                    fontFamily: 'Roboto Mono'
                                }}
                            >
                                <option value="">Select a category</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', color: 'var(--code-green)' }}>
                                &gt; EXCERPT:
                            </label>
                            <textarea
                                value={formData.excerpt}
                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                required
                                rows="3"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'var(--matrix-black)',
                                    border: '1px solid var(--terminal-gray)',
                                    color: 'var(--bright-white)',
                                    fontFamily: 'Roboto Mono',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <label style={{ display: 'block', marginBottom: 'var(--spacing-sm)', color: 'var(--code-green)' }}>
                                &gt; CONTENT (Markdown supported):
                            </label>
                            <textarea
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                required
                                rows="15"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'var(--matrix-black)',
                                    border: '1px solid var(--terminal-gray)',
                                    color: 'var(--bright-white)',
                                    fontFamily: 'Roboto Mono',
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--bright-white)', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={formData.is_featured}
                                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                                    style={{ width: '20px', height: '20px' }}
                                />
                                <span className="font-mono">FEATURED POST</span>
                            </label>
                        </div>

                        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                            <button
                                type="submit"
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    background: 'var(--electric-lime)',
                                    color: 'var(--matrix-black)',
                                    fontWeight: 'bold',
                                    fontFamily: 'Roboto Mono',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                {isEditMode ? 'UPDATE POST' : 'PUBLISH POST'}
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/admin/dashboard')}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    background: 'var(--terminal-gray)',
                                    color: 'var(--bright-white)',
                                    fontFamily: 'Roboto Mono',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                CANCEL
                            </button>
                        </div>
                    </form>
                </TerminalWindow>
            </div>
        </div>
    );
};

export default PostEditor;
