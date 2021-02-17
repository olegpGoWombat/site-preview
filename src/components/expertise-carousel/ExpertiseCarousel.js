import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./styles.module.scss"

const expertiseTitles = [
  "Manufacturing & Logistics",
  "Travel & Hospitality",
  "Oil and Gas",
  "HealthTech",
  "AdTech",
]

const ExpertiseCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      expertiseImages: allFile(filter: { name: { regex: "/^expertise/" } }) {
        nodes {
          childImageSharp {
            id
            fluid(maxWidth: 210) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return (
    <div className={styles["expertiseCarousel"]}>
      {data.expertiseImages.nodes.map((expertiseImage, i) => {
        const {
          childImageSharp: { id, fluid },
        } = expertiseImage

        return (
          <div key={id} className={styles["expertiseItem"]}>
            <span>{expertiseTitles[i]}</span>
            <Img fluid={fluid} alt="expertise" />
          </div>
        )
      })}
    </div>
  )
}

export default ExpertiseCarousel
