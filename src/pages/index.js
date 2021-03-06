import React from "react"

import Layout from "@global/Layout"
import Seo from "@global/Seo"
import Hero from "@components/Hero"

import { useHomeImage } from "@lib"

import { emailAddress } from "@constants"
import ProjectsPreview from "@home/ProjectsPreview"
import AboutMePreview from "@home/AboutMePreview"

const IndexPage = () => {
  const image = useHomeImage()
  return (
    <Layout>
      <Seo title="Home" />
      <Hero
        image={image}
        button={{
          text: emailAddress,
          props: {
            href: `mailto:${emailAddress}`,
          },
        }}
        strapline="Your friendly internet web developer"
      />
      <ProjectsPreview />
      <hr />
      <AboutMePreview />
    </Layout>
  )
}

export default IndexPage
