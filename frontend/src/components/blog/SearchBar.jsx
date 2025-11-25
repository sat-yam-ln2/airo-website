import React from 'react';
import '../../styles/globals.css';

const SearchBar = ({ onSearch }) => {
    return (
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <input
                type="text"
                placeholder="$ search blog_posts..."
                onChange={(e) => onSearch(e.target.value)}
                style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--terminal-black)',
                    border: '1px solid var(--terminal-gray)',
                    color: 'var(--bright-white)',
                    fontFamily: 'Roboto Mono',
                    fontSize: '1rem',
                    outline: 'none'
                }}
            />
        </div>
    );
};

export default SearchBar;
