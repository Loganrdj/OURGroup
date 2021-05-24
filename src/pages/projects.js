import React from "react";
import {Link} from "gatsby";
import "./pagestyles.css";
import Layout from "../components/Layout";
import SimpleSlider from "../components/Slider";
import styled from "styled-components";
import ProjectComponent from "../components/ProjectComponent";

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
const projectsGallery = styled.div`
    display: flex;
`

const Projects = (data) => (
    <Layout>
        <div id="projects-background">
            {/* <h1>Hello</h1>
            <ProjectComponent props={data.data.site.siteMetadata.portfolioData[0]} /> */}
        </div>
        <IndexCarouselSection>
        <div id="projects-carousel-wrapper">
            <h2 id="projects-section-description">SOME OF OUR OTHER PROJECTS</h2>
            <Link to="/projects" id="project-page-carousel-link">View All ›</Link>
        </div>
        <SimpleSlider></SimpleSlider>
        </IndexCarouselSection>
    </Layout>
)
  
export default Projects

export const query = graphql`
query PortfolioData {
    site {
      siteMetadata {
        portfolioData {
          name
        }
      }
    }
  }
`