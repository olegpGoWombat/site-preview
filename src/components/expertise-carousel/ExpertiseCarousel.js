import React from "react"

// import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import expertise1 from "../../assets/images/expertise1.jpg"
import expertise2 from "../../assets/images/expertise2.jpg"
import expertise3 from "../../assets/images/expertise3.jpg"
import expertise4 from "../../assets/images/expertise4.jpg"
import expertise5 from "../../assets/images/expertise5.jpg"

import styles from "./styles.module.scss"

const ExpertiseCarousel = () => {
  return (
    <div className={styles["expertiseCarousel"]}>
      <Carousel showArrows={false} showIndicators={false} showThumbs={false}>
        <div className={styles["expertiseItem"]}>
          <span>Manufacturing & Logistics</span>
          <img src={expertise1} width="140" alt="exp1" />
        </div>
        <div className={styles["expertiseItem"]}>
          <span>Manufacturing & Logistics</span>
          <img src={expertise1} width="140" alt="exp1" />
        </div>
        <div className={styles["expertiseItem"]}>
          <span>Manufacturing & Logistics</span>
          <img src={expertise1} width="140" alt="exp1" />
        </div>
        <div className={styles["expertiseItem"]}>
          <span>Manufacturing & Logistics</span>
          <img src={expertise1} width="140" alt="exp1" />
        </div>
        <div className={styles["expertiseItem"]}>
          <span>Manufacturing & Logistics</span>
          <img src={expertise1} width="140" alt="exp1" />
        </div>
      </Carousel>
    </div>
  )
}

export default ExpertiseCarousel
