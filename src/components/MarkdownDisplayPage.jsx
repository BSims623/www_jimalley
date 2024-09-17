import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import styles from '../styles/components/markdownDisplay.module.scss';
import { source_serif_4 } from '@/styles/fonts';

export default function MarkdownDisplayPage({ content }) {
    const createMarkup = () => {
        const rawHtml = marked(content);
        const sanitizedHtml = DOMPurify.sanitize(rawHtml);
        return { __html: sanitizedHtml };
    };

    return (
        <div className={`${source_serif_4.className} ${styles.container}`} dangerouslySetInnerHTML={createMarkup()} />
    )
}