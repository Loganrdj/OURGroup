import React from "react";
import {Link} from "gatsby";
import "./pagestyles.css";
import Layout from "../components/Layout";
import SimpleSlider from "../components/Slider";
import styled from "styled-components";

import Img from "gatsby-image";

const IndexCarouselSection = styled.div`
    background-color: white;
    color: #7BC366;
    padding: 6% 14% 8% 14%;
    height: 50%;
    @media only screen and (max-width: 600px) {
        #projects-section-description { //media query
        // font-size: 13px;
        width: 100%;
        }
    }
    .slick-prev:before,
    .slick-next:before {
        color: #7BC366;
    }
`

const ProjectDetailDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #7BC366;
    justify-content: center;
    .project-description-div {
      margin-left: 7%;
      width: 19%;
      position: -webkit-sticky;
      position: sticky;
      top: 20px;
      color: white;
      font-size: .6rem;
      p {
        margin-bottom: 5%;
      }
      .project-title-strong {
        margin-bottom: -3%;
        font-weight: bold;
      }
    }
    .project-body-div {
      width: 100%;
      justify-content: center;
      margin-right: 7%;
      color: white;
    }
    .split-image-div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .project-image {
        width: 47%;
      }
    }
    .project-image {
      margin-bottom: 5%;
    }
`

const projectOne = (data) => (
    <Layout>
      <ProjectDetailDiv>
        <div className="project-description-div">
          <h6>{data.data.site.siteMetadata.portfolioData[0].name}</h6>
          <p className="project-title-strong">Owner:</p>
          <p>{data.data.site.siteMetadata.portfolioData[0].owner}</p>
          <p className="project-title-strong">Scale: </p>
          <p>{data.data.site.siteMetadata.portfolioData[0].scale}</p>
          <p className="project-title-strong">Location:</p>
          <p>{data.data.site.siteMetadata.portfolioData[0].location}</p>
        </div>
        
        <div className="project-body-div">
          <div>
            <Img className="project-image" fluid={data.data.allFile.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image" />
          </div>
          <p>The preservation and revitalization of the former site of the Shanghai General Chamber of Commerce is a typical case of successful practice in the protection of urban heritage. It is a historical and cultural landmark to commemorate the modern Chinese business elites in promoting the development of Shanghai’s urban development. It is also a contemporary historical heritage protection worker. In the face of the goal of an excellent global city, it is a Shanghai urban construction achievement that does not forget the original aspiration and works hard together.</p>
          <div className="split-image-div">
            <Img className="project-image" fluid={data.data.allFile.edges[1].node.childImageSharp.fluid} alt="This is a placeholder building image" />
            <Img className="project-image" fluid={data.data.allFile.edges[2].node.childImageSharp.fluid} alt="This is a placeholder building image" />
          </div>
          <p>This project embodies the exemplary protection and utilization of architectural heritage from four aspects: the protective restoration of the building itself, the diverse presentation of heritage values, the standardized implementation of work procedures, and the multi-level promotion of cultural protection</p>
          <div>
            <Img className="project-image" fluid={data.data.allFile.edges[3].node.childImageSharp.fluid} alt="This is a placeholder building image" />
          </div>
          <div>
            <Img className="project-image" fluid={data.data.allFile.edges[4].node.childImageSharp.fluid} alt="This is a placeholder building image" />
          </div>
        </div>
      </ProjectDetailDiv>
      <IndexCarouselSection>
      <div id="projects-carousel-wrapper">
          <h2 id="projects-section-description">SOME OF OUR OTHER PROJECTS</h2>
          <Link to="/projects" id="project-page-carousel-link">View All ›</Link>
      </div>
      <SimpleSlider></SimpleSlider>
      </IndexCarouselSection>
    </Layout>
)
  
export default projectOne

export const query = graphql`
query projectOneQuery {
  allFile(filter: {relativePath: {glob: "building-project*"}}) {
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
  site(siteMetadata: {}) {
    siteMetadata {
      portfolioData {
        description
        name
        owner
        scale
        type
        work
        location
        designperiod
      }
    }
  }
}
`