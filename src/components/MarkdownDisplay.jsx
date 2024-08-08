'use client';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import { useState, useEffect } from 'react';
import styles from '../styles/components/markdownDisplay.module.scss';

export default function MarkdownDisplay({ path }) {
    const [content, setContent] = useState("");
    useEffect(() => {
        fetch(path)
            .then((res) => res.text())
            .then((text) => {
                setContent(text);
            });
    }, [path]);

    const createMarkup = () => {
        const rawHtml = marked(content);
        const sanitizedHtml = DOMPurify.sanitize(rawHtml);
        return { __html: sanitizedHtml };
    };

    return (
        <div className={styles.container} dangerouslySetInnerHTML={createMarkup()} />
    )
}