import React from "react"
import { Link } from "gatsby"

import { Button } from "@components/Common"

import styles from "./Post.module.css"

export default function Post({ children }) {
  return (
    <>
      <section className={styles.Post}>{children}</section>
      <div className={styles.CallToAction}>
        <Button Tag={Link} to="/blog" data-theme="dark">
          Back to Blog
        </Button>
      </div>
    </>
  )
}