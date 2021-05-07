import React from "react";
import { Link, graphql } from "gatsby";
import { Carousel } from "react-bootstrap";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import styled from "styled-components";
import "./pagestyles.css"

const CarouselStyled = styled.div`
  // display: block;
  width: 80%;
  // height: 100%;
  align-self: center;
  margin: auto;
  margin-top: -200px; //USE THIS FOR BRINGING THE GALLERY UP

  @media only screen and (max-width: 600px) {
    // margin-top: -400px;
  }
`

const IndexContentDiv = styled.div`
  h1 {
    color: #7BC366 !important;
    font-size: 40px;
  }
  margin-top: 5%;
  
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
      <IndexContentDiv>
        <h1>WELCOME TO OUR GROUP.</h1>
      </IndexContentDiv>
    </CarouselStyled>
    
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