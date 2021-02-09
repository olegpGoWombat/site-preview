import React from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

// Assets
import Logo from "../../assets/svg/logo.svg"
import EmailIcon from "../../assets/svg/email.svg"
import MobileMenu from "../../assets/svg/mobile-menu.svg"
import Facebook from "../../assets/svg/facebook.svg"
import Twitter from "../../assets/svg/twitter.svg"
import LinkedIn from "../../assets/svg/linkedin.svg"
import Instagram from "../../assets/svg/instagram.svg"

const Header = () => {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {location.pathname !== "/" ? (
          <Link to="/">
            <Logo />
          </Link>
        ) : (
          <Logo />
        )}
      </div>

      <nav className={styles.navLinks}>
        <Link
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
          to="/"
        >
          Home
        </Link>
        <Link
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
          to="/about"
        >
          About
        </Link>
        <Link
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
          to="/blog"
        >
          Blog
        </Link>
      </nav>

      <div className={styles.menu}>
        <div className={styles.menuIcons}>
          <a href="#contacts" className={styles.email}>
            <EmailIcon width={20} height={20} />
          </a>

          <div className={styles.socialIcons}>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <LinkedIn />
            </a>
            <a href="#">
              <Instagram />
            </a>
          </div>
        </div>

        <div className={styles.headerLinks}>
          <div>
            <button type="button" className={styles.contactsBtn}>
              Contacts
            </button>

            <button type="button" className={styles.hamburger}>
              <MobileMenu width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
