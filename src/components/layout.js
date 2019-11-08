import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import '../styles/index.scss'
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.contianer}>
      <div className={layoutStyles.content}>
        <Nav />
        {props.children}
        <ul className={layoutStyles.social}>
          <li><a href='https://twitter.com/SapeleVictor' target='blank'><i className={`fa fa-twitter fa-3x ${layoutStyles.socialItem}`}></i></a></li>
          <li><a href="https://github.com/SapeleD3" target='blank'><i className={`fa fa-github fa-3x ${layoutStyles.socialItem}`}></i></a></li>
          <li><a href='https://www.linkedin.com/in/moses-sapele-327147115/' target='blank'><i className={`fa fa-linkedin fa-3x ${layoutStyles.socialItem}`}></i></a></li>
          <li><a href='https://angel.co/sapele-moses' target='blank'><i className={`fa fa-angellist fa-3x ${layoutStyles.socialItem}`}></i></a></li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
