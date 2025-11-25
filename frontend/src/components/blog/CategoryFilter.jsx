import React from 'react';
import '../../styles/globals.css';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
            <button
                onClick={() => onSelectCategory('ALL')}
                style={{
                    padding: '8px 16px',
                    border: '1px solid var(--terminal-gray)',
                    background: selectedCategory === 'ALL' ? 'var(--terminal-gray)' : 'transparent',
                    color: 'var(--bright-white)',
                    fontFamily: 'Roboto Mono'
                }}
            >
                [ALL]
            </button>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    style={{
                        padding: '8px 16px',
                        border: '1px solid var(--terminal-gray)',
                        background: selectedCategory === cat ? 'var(--terminal-gray)' : 'transparent',
                        color: 'var(--bright-white)',
                        fontFamily: 'Roboto Mono'
                    }}
                >
                    [{cat}]
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
