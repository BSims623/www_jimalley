import styles from "@/styles/components/pagination.module.scss";
import Link from "next/link";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pagination({numberOfPages, currentPage, story}) {
    const pages = Array.from({length: numberOfPages}, (_, index) => index + 1);


    return (
        <div className={styles.main_container}>
            <Link href={currentPage === 1 ? `/short-stories/${story}/page-1`: `/short-stories/${story}/page-${currentPage - 1}`}>
                <button className={styles.button_change}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </Link>
            <div className={styles.container}>
                {pages.map((page, index) => {
                    return (
                        <Link href={`/short-stories/${story}/page-${index + 1}`} key={index}>
                            <div className={`${styles.button} ${index === 0 && styles.button_start} ${index + 1 === numberOfPages && styles.button_end} ${index + 1 === currentPage && styles.button_current}`}>
                                <span className={styles.page_number}>{page}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Link href={currentPage === numberOfPages ? `/short-stories/${story}/page-${numberOfPages}`: `/short-stories/${story}/page-${currentPage + 1}`}>
                <button className={styles.button_change}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </Link>
        </div>
    )
}