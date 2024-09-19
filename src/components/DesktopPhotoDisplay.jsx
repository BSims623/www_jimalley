import styles from "@/styles/components/desktopPhotoDisplay.module.scss";
import ExportedImage from "next-image-export-optimizer";

export default function DesktopPhotoDisplay({ photos, tall }) {

    return (
        <div className={styles.images_container}>
            {photos.map((photo, index) => {
                return (
                    <div className={`img_container ${tall ? styles.img_container_tall: styles.img_container}`} key={index}>
                        <ExportedImage src={photo.src} fill={true} alt={photo.alt} />
                    </div>
                )
            })}
        </div>
    )
}