import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import page from './page.module.scss'

const index = () => {
  return (
    <div>
      <Layout>
        <h1>Hello.</h1>
        <h2>
          I'm Sapele Moses, a Fullstack Developer From The giant of Africa,
          Nigeria
        </h2>
        <button className={page.button}>My Resume</button>
        <p>
          Get to Know Me Better i may be what your Looking For ?{" "}
          <Link to="/about">About Me</Link>
        </p>
        <p>
          Like with Every Superman i Write Too, Heres my content{" "}
          <Link to="/blog">My Blog</Link>
        </p>
      </Layout>
    </div>
  )
}

export default index
