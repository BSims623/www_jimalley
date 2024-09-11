import styles from "@/styles/components/pagination.module.scss";
import Link from "next/link";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pagination({numberOfPages, currentPage, story, thePath}) {
    let pages;
    if (numberOfPages <= 7) {
        pages = Array.from({length: numberOfPages}, (_, index) => index + 1);  
    } else if (currentPage <= 5) {
        pages = [1,2,3,4,5,"...",numberOfPages]
    }  else if (currentPage >= numberOfPages - 4) {
        pages = [1, "..."];
        for (let i = 4; i >= 0; i--) {
            pages.push(numberOfPages - i);
        }
    } else if (currentPage > 5) {
        pages = [1,"...",currentPage - 1, currentPage, currentPage + 1, "...", numberOfPages]
    } 

    return (
        <div className={styles.container}>
            <Link href={currentPage === 1 ? `${thePath}/${story}/page-1`: `${thePath}/${story}/page-${currentPage - 1}`}>
                <div className={`${styles.button} ${styles.button_start}`}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
            </Link>
            {pages.map((page, index) => {
                if (page === "...") {
                    return (
                        <div className={`${styles.button} ${index === 0 && styles.button_startt} ${index + 1 === numberOfPages && styles.button_end} ${page === currentPage && styles.button_current}`} key={index}>
                            <span className={styles.page_number}>{page}</span>
                        </div>
                    )
                } else {
                    return (
                    <Link href={`${thePath}/${story}/page-${page}`} key={index}>
                        <div className={`${styles.button} ${index === 0 && styles.button_startt} ${page === numberOfPages && styles.button_endd} ${page === currentPage && styles.button_current}`}>
                            <span className={styles.page_number}>{page}</span>
                        </div>
                    </Link>
                ) 
                }
            })}
            <Link href={currentPage === numberOfPages ? `${thePath}/${story}/page-${numberOfPages}`: `${thePath}/${story}/page-${currentPage + 1}`}>
                <div className={`${styles.button} ${styles.button_end}`}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </Link>
        </div>  
    )
}