import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import navStyles from "./nav.module.scss"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={navStyles.header}>
      <h3>
        <Link
          to="/"
          className={navStyles.title}
          activeClassName={navStyles.activeNavItem}
        >
          {data.site.siteMetadata.title}
        </Link>
      </h3>
      <ul className={navStyles.navList}>
        <li>
          <Link
            className={navStyles.navItem}
            activeClassName={navStyles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={navStyles.navItem}
            activeClassName={navStyles.activeNavItem}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={navStyles.navItem}
            activeClassName={navStyles.activeNavItem}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Nav
