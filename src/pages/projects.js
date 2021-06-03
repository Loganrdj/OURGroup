import React from "react";
import { Link, graphql } from "gatsby";
import "./pagestyles.css";
import Layout from "../components/Layout";
// import styled from "styled-components";
import ProjectComponent from "../components/ProjectComponent";
import { Container, Row, Col } from "react-bootstrap";
import Img from "gatsby-image";


// const IndexCarouselSection = styled.div`
//     background-color: white;
//     color: #7BC366;
//     padding: 6% 14% 8% 14%;
//     height: 50%;
//     @media only screen and (max-width: 600px) {
//         #projects-section-description { //media query
//         // font-size: 13px;
//         width: 100%;
//         }
//     }
//     .slick-prev:before,
//     .slick-next:before {
//         color: #7BC366;
//     }
// `
// const projectsGallery = styled.div`
//     display: flex;
// `

const Projects = (props) => (
    <Layout>
        <Container>
            <Row>
                <h1 className="margin-up">PROJECTS</h1>
            </Row>
            <Row className="projects-row">
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.allFile.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>{props.data.site.siteMetadata.portfolioData[0].name}</h6>
                    <p>{props.data.site.siteMetadata.portfolioData[0].owner}</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.allFile.edges[1].node.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>{props.data.site.siteMetadata.portfolioData[1].name}</h6>
                    <p>{props.data.site.siteMetadata.portfolioData[1].owner}</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.allFile.edges[2].node.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>{props.data.site.siteMetadata.portfolioData[2].name}</h6>
                    <p>{props.data.site.siteMetadata.portfolioData[2].owner}</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.allFile.edges[3].node.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>{props.data.site.siteMetadata.portfolioData[3].name}</h6>
                    <p>{props.data.site.siteMetadata.portfolioData[3].owner}</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.allFile.edges[4].node.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>{props.data.site.siteMetadata.portfolioData[4].name}</h6>
                    <p>{props.data.site.siteMetadata.portfolioData[4].owner}</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.allFile.edges[5].node.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>{props.data.site.siteMetadata.portfolioData[5].name}</h6>
                    <p>{props.data.site.siteMetadata.portfolioData[5].owner}</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.allFile.edges[6].node.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>{props.data.site.siteMetadata.portfolioData[6].name}</h6>
                    <p>{props.data.site.siteMetadata.portfolioData[6].owner}</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.allFile.edges[7].node.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>{props.data.site.siteMetadata.portfolioData[7].name}</h6>
                    <p>{props.data.site.siteMetadata.portfolioData[7].owner}</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.allFile.edges[8].node.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>{props.data.site.siteMetadata.portfolioData[8].name}</h6>
                    <p>{props.data.site.siteMetadata.portfolioData[8].owner}</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.allFile.edges[9].node.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>{props.data.site.siteMetadata.portfolioData[9].name}</h6>
                    <p>{props.data.site.siteMetadata.portfolioData[9].owner}</p>
                </Col>
            </Row>
        </Container>
    </Layout>
)
  
export default Projects

export const query = graphql`
query projectsPage {
    site {
      siteMetadata {
        portfolioData {
          name
          owner
        }
      }
    }
    allFile(filter: {relativeDirectory: {glob: "Project-*"}, name: {glob: "display*"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    }
  }
`