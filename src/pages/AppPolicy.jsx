import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import styles from '../styles/AppPolicy.module.css';

const AppPolicy = () => {
    const [policyText, setPolicyText] = useState('');

    useEffect(() => {
        fetch('/policy/Privacy Policy for Makeathon 7.md')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => setPolicyText(marked(text)))
            .catch(error => console.error('Fetch error:', error));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Privacy Policy</h1>
            <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: policyText }} />
        </div>
    );
};

export default AppPolicy;