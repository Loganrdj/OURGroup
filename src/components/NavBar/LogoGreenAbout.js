import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from "gatsby"


export default function LogoGreenAbout() {

  return (
    <StaticQuery query={graphql`
        query AboutLogo {
        file(relativePath: {eq: "OURGroupLogoGreen.png"}) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

    `} render={data => (
        <Img fluid={data.file.childImageSharp.fluid} />
    )}
    />
  )
}

// export const query = graphql`
//   query MyQuery {
//     file(relativePath: {eq: "OURGroupLogoGreen.png"}) {
//       childImageSharp {
//         fixed {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }

//   `