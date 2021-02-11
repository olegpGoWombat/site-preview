import React from "react"

//assets
import styles from "./styles.module.scss"
import WebDevIcon from "../assets/svg/services-webdev.svg"
import MobileDevIcon from "../assets/svg/services-mobiledev.svg"
import SystemsIcon from "../assets/svg/services-systems.svg"
import MlIcon from "../assets/svg/services-ml.svg"
import SupportIcon from "../assets/svg/services-support.svg"
import PythonIcon from "../assets/svg/tech-python.svg"
import DjangoIcon from "../assets/svg/tech-jango.svg"
import JsIcon from "../assets/svg/tech-js.svg"
import ReactIcon from "../assets/svg/tech-react.svg"
import ReactNativeIcon from "../assets/svg/tech-react-native.svg"
import ArrowIcon from "../assets/svg/arrow.svg"
import GoodFirmIcon from "../assets/svg/good-firms.svg"
import UpWorkIcon from "../assets/svg/upwork.svg"
import ClutchIcon from "../assets/svg/clutch.svg"
import CoffeeIcon from "../assets/svg/coffee.svg"
import ArrowRightIcon from "../assets/svg/arrow-right.svg"

import Timeline from "../assets/images/About-timeline.png"
import BlogPostImage from "../assets/images/blogpost-image.jpg"
import AboutImgPlaceholder from "../assets/images/about-img-placeholder.png"

// components
import Header from "../components/header"
import Footer from "../components/footer"
import TestimonialsCarousel from "../components/testimonials-carousel"
import ExpertiseCarousel from "../components/expertise-carousel"
import FaqAccordion from "../components/faq-accordion"
import ContactForm from "../components/contact-form/contact-form"

const IndexPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles["welcome"]}>
        <div className="wrapper">
          <Header />

          <h1>Lorem ipsum amet, consectetur adipiscing</h1>
          <p>Leo cursus enim luctus praesent ut ut nunc magna.</p>

          <button type="button" onClick={() => {}}>
            Static text
          </button>
        </div>
      </div>

      <div className={styles["different"]}>
        <div className={styles.differentContainer}>
          <div className="wrapper">
            <div className={styles.differentTitle}>
              <h2>Why we are different</h2>
              <p>
                We work directly in client’s repo and deliver the codebase
                immediately
              </p>

              <button type="button">
                <ArrowRightIcon />
              </button>
            </div>

            <ul>
              <li>
                Your offer will reach the one who needs you. Without chatbots,
                call center and briefings
              </li>
              <li>
                We don’t just blindly execute. We come up with solid plans that
                fit your concept
              </li>
              <li>R&D Staff: master’s degrees</li>
              <li>We don’t hide our devs</li>
              <li>
                We prefer meeting clients offline: we can visit you and you’re
                welcome to visit us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles["services"]}>
        <div className="wrapper">
          <h2>Services</h2>

          <div className={styles["servicesContainer"]}>
            <div className={styles["service"]}>
              <div>
                <WebDevIcon />
              </div>
              <span>Web applications development</span>
            </div>
            <div className={styles["service"]}>
              <div>
                <MobileDevIcon />
              </div>
              <span>Mobile applications development</span>
            </div>
            <div className={styles["service"]}>
              <div>
                <SystemsIcon />
              </div>
              <span>CRM/ERP/SCADA systems</span>
            </div>
            <div className={styles["service"]}>
              <div>
                <MlIcon />
              </div>
              <span>Machine Learning, Computer Vision, loT</span>
            </div>
            <div className={styles["service"]}>
              <div>
                <SupportIcon />
              </div>
              <span>Project maintenance and support</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["techstack"]}>
        <div className="wrapper">
          <h2>We think with</h2>

          <div className={styles.technologies}>
            <div className={styles.technology}>
              <PythonIcon />
              <h4>Python +text Python is the new sexy.</h4>
              <p>
                We will make your project using technologies in which the core
                team has 10+ years of experience.
              </p>
            </div>

            <div className={styles.technology}>
              <DjangoIcon />
              <h4>Python +text Python is the new sexy.</h4>
              <p>
                We will make your project using technologies in which the core
                team has 10+ years of experience.
              </p>
            </div>

            <div className={styles.technology}>
              <JsIcon />
              <h4>JavaScript</h4>
            </div>

            <div className={styles.technology}>
              <ReactIcon />
              <h4>React</h4>
            </div>

            <div className={styles.technology}>
              <ReactNativeIcon />
              <h4>React Native</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["advice"]}>
        <div className="wrapper">
          <div className={styles.adviceContainer}>
            <h2>
              Your project can be
              <br />
              deployed to
            </h2>

            <button type="button">Need an advice?</button>
          </div>
        </div>
      </div>

      <div className={styles["expertise"]}>
        <div className="wrapper">
          <h2>Our Expertise</h2>
          <h4>Industries we rock but not limited, open for new challenges</h4>
          <p>
            Over many years of working with different businesses, we realized
            that they have a lot in common
          </p>

          <ExpertiseCarousel />

          <div className={styles.anotherBusiness}>
            <div className={styles.anotherBusinessTitle}>
              <h2>Having a business in another field?</h2>
              <h4>We're always open to smth new.</h4>
              <p>
                We know how to dig deep. Let our expertise help your business
              </p>
            </div>

            <div className={styles["cardWombat"]}>
              <p>
                You might even be surprised with how well our experience is a
                great fit for any type of business even if we haven’t worked
                with yet.
              </p>
              <span>Anyways, we love new challenges.</span>
            </div>

            <button>Let's rock together</button>
          </div>
        </div>
      </div>

      <div className={styles["about"]}>
        <div className="wrapper">
          <div className={styles.aboutContainer}>
            <div className={styles.aboutPhotoContainer}>
              <img src={AboutImgPlaceholder} alt="about" />
            </div>
            <div className={styles.aboutTextContainer}>
              <h2>About company</h2>
              <img src={Timeline} alt="timeline" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                iaculis non interdum praesent fames turpis elit proin. Sagittis
                mauris et odio elit. Consectetur pretium, felis praesent sit.
                Eleifend viverra tristique interdum viverra lobortis. Fermentum
                varius odio nunc ut sapien sit parturient id. In sed tempus nibh
                in vitae libero. Amet, vel vitae ut id augue pharetra aliquet.
              </p>
              <button>More about Wombats</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["rdteam"]}>
        <div className={`wrapper ${styles.rdteamContainer}`}>
          <div className={styles.rdteamTitle}>
            <h2>Test the might of our R&D team</h2>
            <p>
              We are not afraid of delicate, fragile, or even projects you deem
              extraordinary using AI and other cutting-edge technologies.
            </p>
            <p>
              Additionally we have an R&D department that can help you realize
              your bold ideas using state-of-the-art technologies. We have
              experience with computer vision, deep learning algorithms,
              Internet of Things and always happy to learn something new.
            </p>

            <button type="button">Talk to our R&D Lead</button>
          </div>

          <div className={styles.ideaCards}>
            <div className={styles["ideaCard"]}>
              <h3>Computer vision</h3>
              <ArrowIcon />
            </div>
            <div className={styles["ideaCard"]}>
              <h3>Data science</h3>
              <ArrowIcon />
            </div>
            <div className={styles["ideaCard"]}>
              <h3>Machine Learning</h3>
              <ArrowIcon />
            </div>
            <div className={styles["ideaCard"]}>
              <h3>ETL pipelines</h3>
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles["awards"]}>
        <div className="wrapper">
          <h2>Our Awards and benefits</h2>

          <div className={styles.awardItems}>
            <div className={styles["awardItem"]}>
              <GoodFirmIcon />

              <div>
                <h4>GoodFirms</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat commodo est molestie bibendum.
                </p>
              </div>
            </div>
            <div className={styles["awardItem"]}>
              <UpWorkIcon />

              <div>
                <h4>Upwork top Rated +</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat commodo est molestie bibendum.
                </p>
              </div>
            </div>
            <div className={styles["awardItem"]}>
              <ClutchIcon />

              <div>
                <h4>Clutch Leader Awards</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat commodo est molestie bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["meetUs"]}>
        <div className="wrapper">
          <div className={styles["meetPhoto"]}>
            <div>
              <CoffeeIcon />
            </div>
            <h3>Meet us</h3>
            <p>We still believe that offline meetings matter</p>
            <div className={styles.meetUsContent}>
              <h2>
                Have you ever seen a real wombat?
                <br />
                <span>Let’s meet!</span>
              </h2>
              <p className={styles["meetText"]}>
                It is pretty easy to meet us as we are ready to get on a plane.
                Also, our cozy office is always open for a cup of coffee or a
                hard-working meeting.
              </p>
              <p className={styles["meetText"]}>
                And the most important thing is that you can meet our partner
                locally. Again, we still believe in offline meetings.
              </p>
              <div className={styles.meetUsButtons}>
                <button>Book a meeting</button>
                <button>Become a local partner</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["testimonials"]}>
        <h2>Clients & Testimonials</h2>

        <TestimonialsCarousel />
      </div>

      <div className={styles["blog"]}>
        <div className="wrapper">
          <h2>Our blog</h2>

          <div className={styles.blogPostsPreviews}>
            <div className={styles.blogPostPreview}>
              <img src={BlogPostImage} alt="blog post" />
              <h3>Facilisis neque aliquet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                porttitor ipsum quisque libero quam ...
              </p>
            </div>
            <div className={styles.blogPostPreview}>
              <img src={BlogPostImage} alt="blog post" />
              <h3>Facilisis neque aliquet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                porttitor ipsum quisque libero quam ...
              </p>
            </div>
            <div className={styles.blogPostPreview}>
              <img src={BlogPostImage} alt="blog post" />
              <h3>Facilisis neque aliquet.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                porttitor ipsum quisque libero quam ...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["faq"]}>
        <div className="wrapper">
          <h2>FAQ</h2>
          <FaqAccordion />
        </div>
      </div>

      <div className={styles["form"]}>
        <div className={styles.formContainer}>
          <div className="wrapper">
            <h2>Large Contact form</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing ementum et
              augue?
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
