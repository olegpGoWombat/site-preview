import React from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"

import styles from "./styles.module.scss"

// Assets
import Logo from "../../assets/svg/logo.svg"
import EmailIcon from "../../assets/svg/email.svg"
import MobileMenu from "../../assets/svg/mobile-menu.svg"

const Header = () => {
  const location = useLocation()

  return (
    <header className={styles.header}>
      {location.pathname !== "/" ? (
        <Link to="/">
          <Logo />
        </Link>
      ) : (
        <Logo />
      )}

      <div className={styles.menu}>
        <a href="#contacts" className={styles.icon}>
          <EmailIcon width={20} height={20} />
        </a>

        <button type="button" className={styles["hamburger"]}>
          <MobileMenu width={24} height={24} />
        </button>
      </div>
    </header>
  )
}

export default Header
