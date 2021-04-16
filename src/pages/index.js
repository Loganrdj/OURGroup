import React from "react"
import { Link, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import Layout from "../components/Layout"
import building2 from "../images/building2.jpeg"
import building3 from "../images/building3.jpeg"
import building4 from "../images/building4.jpeg"
import Img from "gatsby-image"
// import styled from "styled-components"

const IndexPage = (props) => (
  <Layout>
    <Carousel>
      <Carousel.Item>
        <Img fluid={props.data.building.childImageSharp.fluid} alt="This is a placeholder building image" />
        <Carousel.Caption>
          <p>This is the first slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={building2} alt="building alt"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={building3} alt="building alt"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={building4} alt="building alt"></img>
      </Carousel.Item>
    </Carousel>
    <h1>WELCOME TO OUR GROUP.</h1>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    building: file(relativePath: { eq: "./building.png"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`