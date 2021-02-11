import React from "react"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import TestimonialsStarIcon from "../../assets/svg/testimonials-star.svg"

import styles from "./styles.module.scss"
import "./style.css"

const TestimonialsCarousel = () => {
  return (
    <div className={styles.testimonialsCarousel}>
      <Carousel
        showStatus={false}
        // infiniteLoop
        selectedItem={3}
        centerMode
        centerSlidePercentage={30}
        showArrows={false}
        showThumbs={false}
      >
        <div className={styles["testimonialsCard"]}>
          <div className={styles["testimonialsStar"]}>
            <TestimonialsStarIcon />
            <span>4.5</span>
          </div>
          <div className={styles["testimonialsUser"]}>
            <div></div>
            <div>
              Name Lastname
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
              Name Lastname
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
              Name Lastname
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
              Name Lastname
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
              Name Lastname
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
              Name Lastname
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
              Name Lastname
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
      </Carousel>
    </div>
  )
}

export default TestimonialsCarousel
