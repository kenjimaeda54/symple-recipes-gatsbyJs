import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as Styles from "./home.module.css"

export default function Home() {
  return (
    <Layout>
      <header className={Styles.header}>
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="main image of the site"
          className={Styles.headerImage}
          layout="fullWidth"
        />
        <div className={Styles.title}>
          <h1>Simply Recipes</h1>
          <h3>No fluff, Just recipes</h3>
        </div>
      </header>
    </Layout>
  )
}
