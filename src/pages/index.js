import React from "react";
import { Link, graphql } from "gatsby";
import { Carousel } from "react-bootstrap";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import styled from "styled-components";

const CarouselStyled = styled.div`
  display: block;
  width: 1000px;
  height: 500px;
  align-self: center;
`

const IndexPage = (props) => (
  <Layout>
    <CarouselStyled>
    <Carousel>
      <Carousel.Item>
        <Img fluid={props.data.allFile.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image" />
        <Carousel.Caption>
          <p>This is the first slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={props.data.allFile.edges[1].node.childImageSharp.fluid} alt="This is a placeholder building image" />
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={props.data.allFile.edges[2].node.childImageSharp.fluid} alt="This is a placeholder building image" />
      </Carousel.Item>
      <Carousel.Item>
       <Img fluid={props.data.allFile.edges[3].node.childImageSharp.fluid} alt="This is a placeholder building image" />
      </Carousel.Item>
    </Carousel>
    </CarouselStyled>
    <h1>WELCOME TO OUR GROUP.</h1>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query building {
    allFile(filter: {relativePath: {glob: "building*"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1500, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`