import React, { useState, useEffect, useRef } from "react"
import TestimonialsStarIcon from "../../assets/svg/testimonials-star.svg"

import styles from "./styles.module.scss"

// assets
import ArrowIcon from "../../assets/svg/arrow-right.svg"

const TestimonialsCarousel = () => {
  const [currentImg, setCurrentImg] = useState(0)

  const carouselRef = useRef(null)
  const carouselItemRef = useRef(null)

  useEffect(() => {
    const carouselItemWidth = carouselItemRef.current.offsetWidth
    const carouselItemMarginRight = parseInt(
      window.getComputedStyle(carouselItemRef.current).marginRight
    )

    // const initialCarouselTranslate = window.innerWidth / 2

    carouselRef.current.style.transform = `translateX(-${
      (carouselItemWidth + carouselItemMarginRight) * currentImg
    }px)`
  }, [currentImg])

  const onNextSlideHandler = e => {
    e.preventDefault()

    if (currentImg === 6) {
      setCurrentImg(0)
      return
    }

    setCurrentImg(prevState => prevState + 1)
  }

  const onPrevSlideHandler = e => {
    e.preventDefault()

    if (currentImg === 0) {
      setCurrentImg(6)
      return
    }

    setCurrentImg(prevState => prevState - 1)
  }

  const indicatorDotClickHandler = index => {
    setCurrentImg(index)
  }

  return (
    <div className={styles.testimonialsCarousel}>
      <div className={styles.carouselButtons}>
        <button
          className={styles.carouselButton}
          type="button"
          onClick={onPrevSlideHandler}
        >
          <ArrowIcon />
        </button>
        <button
          className={styles.carouselButton}
          type="button"
          onClick={onNextSlideHandler}
        >
          <ArrowIcon />
        </button>
      </div>

      <div className={styles.testimonialsCardsContainer}>
        <div ref={carouselRef} className={styles.testimonialsCards}>
          <div ref={carouselItemRef} className={styles["testimonialsCard"]}>
            <div className={styles["testimonialsStar"]}>
              <TestimonialsStarIcon />
              <span>4.5</span>
            </div>
            <div className={styles["testimonialsUser"]}>
              <div></div>
              <div>
                Name Lastname 1
                <br />
                <span>Company name</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur dolorem vel distinctio eius esse possimus iusto unde
              quam neque voluptatem sunt asperiores, impedit facere odio nam
              eligendi sint deleniti fugit id soluta dicta. Labore, ut
              repellendus?
            </p>
          </div>

          <div className={styles["testimonialsCard"]}>
            <div className={styles["testimonialsStar"]}>
              <TestimonialsStarIcon />
              <span>4.5</span>
            </div>
            <div className={styles["testimonialsUser"]}>
              <div></div>
              <div>
                Name Lastname 2
                <br />
                <span>Company name</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur dolorem vel distinctio eius esse possimus iusto unde
              quam neque voluptatem sunt asperiores, impedit facere odio nam
              eligendi sint deleniti fugit id soluta dicta. Labore, ut
              repellendus?
            </p>
          </div>

          <div className={styles["testimonialsCard"]}>
            <div className={styles["testimonialsStar"]}>
              <TestimonialsStarIcon />
              <span>4.5</span>
            </div>
            <div className={styles["testimonialsUser"]}>
              <div></div>
              <div>
                Name Lastname 3
                <br />
                <span>Company name</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur dolorem vel distinctio eius esse possimus iusto unde
              quam neque voluptatem sunt asperiores, impedit facere odio nam
              eligendi sint deleniti fugit id soluta dicta. Labore, ut
              repellendus?
            </p>
          </div>

          <div className={styles["testimonialsCard"]}>
            <div className={styles["testimonialsStar"]}>
              <TestimonialsStarIcon />
              <span>4.5</span>
            </div>
            <div className={styles["testimonialsUser"]}>
              <div></div>
              <div>
                Name Lastname 4
                <br />
                <span>Company name</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur dolorem vel distinctio eius esse possimus iusto unde
              quam neque voluptatem sunt asperiores, impedit facere odio nam
              eligendi sint deleniti fugit id soluta dicta. Labore, ut
              repellendus?
            </p>
          </div>

          <div className={styles["testimonialsCard"]}>
            <div className={styles["testimonialsStar"]}>
              <TestimonialsStarIcon />
              <span>4.5</span>
            </div>
            <div className={styles["testimonialsUser"]}>
              <div></div>
              <div>
                Name Lastname 5
                <br />
                <span>Company name</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur dolorem vel distinctio eius esse possimus iusto unde
              quam neque voluptatem sunt asperiores, impedit facere odio nam
              eligendi sint deleniti fugit id soluta dicta. Labore, ut
              repellendus?
            </p>
          </div>
          <div className={styles["testimonialsCard"]}>
            <div className={styles["testimonialsStar"]}>
              <TestimonialsStarIcon />
              <span>4.5</span>
            </div>
            <div className={styles["testimonialsUser"]}>
              <div></div>
              <div>
                Name Lastname 6
                <br />
                <span>Company name</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur dolorem vel distinctio eius esse possimus iusto unde
              quam neque voluptatem sunt asperiores, impedit facere odio nam
              eligendi sint deleniti fugit id soluta dicta. Labore, ut
              repellendus?
            </p>
          </div>
          <div className={styles["testimonialsCard"]}>
            <div className={styles["testimonialsStar"]}>
              <TestimonialsStarIcon />
              <span>4.5</span>
            </div>
            <div className={styles["testimonialsUser"]}>
              <div></div>
              <div>
                Name Lastname 7
                <br />
                <span>Company name</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur dolorem vel distinctio eius esse possimus iusto unde
              quam neque voluptatem sunt asperiores, impedit facere odio nam
              eligendi sint deleniti fugit id soluta dicta. Labore, ut
              repellendus?
            </p>
          </div>
        </div>
      </div>

      <div className={styles.carouselIndicators}>
        {Array.from(Array(7).keys()).map((_, index) => (
          <div
            key={index}
            onClick={() => indicatorDotClickHandler(index)}
            className={`${styles.indicatorDot} ${
              currentImg === index ? styles.selected : ""
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialsCarousel
