import React from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

// assets
import Logo from "../../assets/svg/logo.svg"
import Email from "../../assets/svg/email.svg"
import Facebook from "../../assets/svg/facebook.svg"
import Twitter from "../../assets/svg/twitter.svg"
import LinkedIn from "../../assets/svg/linkedin.svg"
import Instagram from "../../assets/svg/instagram.svg"
import Ukraine from "../../assets/svg/ukraine.svg"

const Footer = ({ isCurrent }) => {
  const location = useLocation()

  return (
    <div className={styles["footer"]}>
      <div className="wrapper">
        <div className={styles.contentContainer}>
          <div className={styles["info"]}>
            {location.pathname !== "/" ? (
              <Link to="/">
                <Logo width={74} />
              </Link>
            ) : (
              <Logo width={74} />
            )}

            <div className={styles["icons"]}>
              <a href="https://facebook.com" target="_black">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_black">
                <Twitter />
              </a>
              <a href="https://LinkedIn.com" target="_black">
                <LinkedIn />
              </a>
              <a href="https://Instagram.com" target="_black">
                <Instagram />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              ullamcorper mi ac laoreet faucibus rhoncus in mattis mattis.
              Facilisi.
            </p>
          </div>

          <div className={styles["content"]}>
            <div className={styles["menu"]}>
              <h3>Menu</h3>

              <div className={styles["links"]}>
                <Link to="/about">About us</Link>
                <Link to="/team">Our team</Link>
                <Link to="/services">Services</Link>
                <Link to="/works">Our works</Link>
                <Link to="/clients">Clients</Link>
                <Link to="/blog">Blog</Link>
              </div>
            </div>

            <div className={styles["contacts"]}>
              <div className={styles["email"]}>
                <h3>Email</h3>
                <span>gowombat@gmail.com</span>
              </div>
              <div className={styles["phone"]}>
                <h3>Phone</h3>
                <div>
                  <Ukraine />
                  <span>+38 (067) 123-45-67</span>
                </div>
                <div>
                  <Ukraine />
                  <span>+38 (067) 123-45-67</span>
                </div>
                <div>
                  <Ukraine />
                  <span>+38 (067) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={styles["copywright"]}>
          &copy; 2021 Go Wombat team. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
