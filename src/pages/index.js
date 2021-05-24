import React from "react";
import { graphql, Link } from "gatsby";
import { Carousel } from "react-bootstrap";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import styled from "styled-components";
import "./pagestyles.css";
import SimpleSlider from "../components/Slider"

const CarouselStyled = styled.div`
  // display: block;
  width: 72%;
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
  }
  #index-title {
    width: 50%;
  }
  #index-description {
    width: 70%;
    margin-top: 2%;
    margin-bottom: 18%;
  }
  margin-top: 10%;
  @media screen and (max-width: 1200px) { 
    #index-title{
      width: 52%;
    }
}
  @media only screen and (max-width: 1024px) {
    #index-title {
      width: 65%;
    }
  }
  @media only screen and (max-width: 768px) {
    #index-title {
      width: 80%;
    }
  }
  @media only screen and (max-width: 600px) {
    #index-title {
      width: 100%;
    }
    #index-description { //media query
      font-size: 15px;
      width: 100%;
    }
  }
  p {
    font-family: "ITCKabelStd-Book"
    color: black;
  }
`

const IndexCarouselSection = styled.div`
  background-color: #7BC366;
  color: white;
  padding: 6% 14% 8% 14%;
  height: 50%;
  @media only screen and (max-width: 600px) {
    #section-description { //media query
      // font-size: 13px;
      width: 100%;
    }
  }
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
        <h1 id="index-title">WELCOME TO OUR GROUP.</h1>
        <p id="index-description">Id ex exercitation sit et tempor cillum fugiat adipisicing anim dolor anim ad pariatur. Ipsum voluptate tempor sint ullamco est mollit cillum dolore magna exercitation enim dolore. Ipsum et est nulla aliquip. Minim eu nulla nostrud laboris. Ea proident officia irure proident nulla. Aliqua aute qui nisi dolor sunt labore adipisicing consectetur quis.</p>
      </IndexContentDiv>
    </CarouselStyled>
    <IndexCarouselSection>
      <div id="carousel-wrapper">
        <h2 id="section-description">SOME OF OUR LATEST PROJECTS</h2>
        <Link to="/projects" id="project-carousel-link">View All ›</Link>
      </div>
      <SimpleSlider></SimpleSlider>
    </IndexCarouselSection>
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