import React from "react";
import "./pagestyles.css";
import Layout from "../components/Layout";
import LogoGreen from "../components/NavBar/LogoGreen";
import styled from "styled-components";
import Img from "gatsby-image";

const AboutBoxDiv1 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
`
const AboutBoxDiv2 = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-flow: wrap;
    padding-left: 8%;
`
const AboutBoxDiv3 = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-flow: wrap;
    padding-right: 8%;
    text-align: right;
`
const AboutBoxDiv4 = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-flow: wrap;
    padding-left: 8%;
`
const AboutBoxDiv5 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
`

const About = (props) => (
    <Layout>
        <div className="about-layer-div">
            <div id="about-box-div-1" className="about-box">
                <AboutBoxDiv1>
                    <LogoGreen></LogoGreen>
                </AboutBoxDiv1>
            </div>
            <div id="about-box-div-2" className="about-box">
                <AboutBoxDiv2>
                    <h1>Urban Renewal Redefined.</h1>
                    <p>Et laborum exercitation ad sint enim anim consequat laboris in sint amet incididunt esse. Elit labore culpa laboris ea aute Lorem laborum enim. Minim id culpa exercitation culpa consectetur do eiusmod.</p>
                </AboutBoxDiv2>
            </div>
        </div>
        <div className="about-layer-div">
            <div id="about-box-div-3" className="about-box">
                <AboutBoxDiv3>
                    <h1>Company History</h1>
                    <p>Pariatur cupidatat ullamco ad nisi aute excepteur cillum incididunt do. Voluptate sunt excepteur occaecat consectetur. Officia proident adipisicing officia occaecat officia. Velit veniam elit excepteur deserunt mollit proident voluptate enim. Exercitation Lorem sunt proident dolor laborum. Laboris magna nostrud id occaecat minim mollit consequat esse adipisicing.</p>
                    <p>Nostrud consequat pariatur ex voluptate velit enim reprehenderit laborum officia proident proident irure qui officia. Cillum ad sunt irure culpa nostrud ullamco Lorem non ullamco qui ipsum aliquip ullamco. In cupidatat exercitation est voluptate nostrud.</p>
                </AboutBoxDiv3>
            </div>
            <div id="about-box-div-4" className="about-box">
                <AboutBoxDiv4>
                    {console.log(props)}
                    <Img fluid={props.data.allFile.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image" />
                </AboutBoxDiv4>
            </div>
        </div> 
        <div className="about-layer-div">
            <div id="about-box-div-5" className="about-box">
                <AboutBoxDiv5>
                    <h1>5</h1>
                </AboutBoxDiv5>
            </div>
        </div> 
        <div className="about-layer-div">
            <div id="about-box-div-6" className="about-box">
                <h1>Clients #7BC366</h1>
                <p>Insert Logos here</p>
            </div>
        </div> 
    </Layout>
)
  
export default About

export const query = graphql`
  query sectionBackground {
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