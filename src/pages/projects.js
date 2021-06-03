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
                    <Img className="grayscale-image" fluid={props.data.Project1.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    <h6>BVLGARI Hotel (Former Chamber of Commerce)</h6>
                    <p>OCT Group</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                <Img className="grayscale-image" fluid={props.data.Project2.childImageSharp.fluid !== undefined ? props.data.Project2.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>Wuhan LanLing District - Urban Planning</h6>
                    <p>Wuhan Tourism Development Investment Group Co., Ltd.</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project3.childImageSharp.fluid !== undefined ? props.data.Project3.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>Nanjing BaiZiTing - Heritage Precinct</h6>
                    <p>Nanjing Zhong Shan Group / Shui On Group</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project4.childImageSharp.fluid !== undefined ? props.data.Project4.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>Shandong - Outlet Mall</h6>
                    <p>Shandong Wellness City Development</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project5.childImageSharp.fluid !== undefined ? props.data.Project5.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>Suzhou Riverbank Redevelopment</h6>
                    <p>Overseas Chinese Town Holdings Company (OCT Group)</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project6.childImageSharp.fluid !== undefined ? props.data.Project6.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>TaiLaiFang and TongYiLi - Urban Renewal</h6>
                    <p>Shanghai Western Property Group</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project7.childImageSharp.fluid !== undefined ? props.data.Project7.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>Rockbund</h6>
                    <p>New Huangpu Group</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project8.childImageSharp.fluid !== undefined ? props.data.Project8.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>Xian Textile City</h6>
                    <p>Xian Changle City Development Co. Ltd.</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project9.childImageSharp.fluid !== undefined ? props.data.Project9.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>Wuhan XianAn Estate - Restoration</h6>
                    <p>Huafa Group</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project10.childImageSharp.fluid !== undefined ? props.data.Project10.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>Zhang Yuan - Preservation Project</h6>
                    <p>China Resources (Holdings) Co., Ltd.</p>
                </Col>
            </Row>
        </Container>
    </Layout>
)
  
export default Projects

export const query = graphql`
query projectsPage {
    Project1: file(
        relativeDirectory: {glob: "Project-1-*"}, 
        name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project2: file(
      relativeDirectory: {glob: "Project-2-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project3: file(
      relativeDirectory: {glob: "Project-3-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project4: file(
      relativeDirectory: {glob: "Project-4-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project5: file(
      relativeDirectory: {glob: "Project-5-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project6: file(
      relativeDirectory: {glob: "Project-6-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project7: file(
      relativeDirectory: {glob: "Project-7-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project8: file(
      relativeDirectory: {glob: "Project-8-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project9: file(
      relativeDirectory: {glob: "Project-9-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project10: file(
      relativeDirectory: {glob: "Project-10-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`  