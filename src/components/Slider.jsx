'use client';
import { useState, useEffect } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import styles from '@/styles/components/slider.module.scss';
import ExportedImage from 'next-image-export-optimizer';

export default function Slider({ photos }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });

  return (
    <div className={styles.container}>
       <div ref={sliderRef} className={`keen-slider ${styles.container}`}>
      {photos.map((photo, index) => {
                return (
                    <div className={`keen-slider__slide ${styles.keen_slider__slide}`} key={index}>
                        <ExportedImage 
                        src={photo.src} 
                        fill={true}
                        sizes="(max-width: 768px) 100vw"
                        alt={photo.alt} />
                    </div>
                )
            })}
        </div>
        {loaded && instanceRef.current && (
            <div className={styles.dots_container}>
            {[
                ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              
                return (
                <button
                    key={idx}
                    onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                    }}
                    className={`${styles.dot} ${currentSlide === idx && styles.active}`}
                ></button>
                )
            })}
            </div>
        )} 
    </div>
    
  )
}