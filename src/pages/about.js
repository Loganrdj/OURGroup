import React from "react";
import "./pagestyles.css";
import Layout from "../components/Layout";
import LogoGreenAbout from "../components/NavBar/LogoGreenAbout";
import styled from "styled-components";
import Img from "gatsby-image";

const AboutBoxDiv1 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    div {
        height: 200px;
        width: 300px;
        // padding: 10% 20% 10% 20%;
    }
`
const AboutBoxDiv2 = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-flow: wrap;
    padding-left: 8%;
    padding-right: 20%;
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
    padding-left: 20%;
    p {
        color: white;
    }
`
const AboutBoxDiv5 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-flow: column nowrap;
    div {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        height: 100%;
        justify-content: space-evenly;
        div {
            margin-right: 50px;
            margin-left: 50px;
        }
    }
    h1 {
        color: #7BC366;
        margin-bottom: 100px;
        margin-top: 100px;
    }
    
`
const AboutBoxDiv6 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    margin-top: 8%;
`

const About = (props) => (
    <Layout>
        {console.log(props)}
        <div className="about-layer-div">
            <div id="about-box-div-1" className="about-box">
                <AboutBoxDiv1>
                    <div>
                        <LogoGreenAbout></LogoGreenAbout>
                    </div>
                </AboutBoxDiv1>
            </div>
            <div id="about-box-div-2" className="about-box">
                <AboutBoxDiv2>
                    <h1>URBAN RENEWAL REDEFINED.</h1>
                    <p>Et laborum exercitation ad sint enim anim consequat laboris in sint amet incididunt esse. Elit labore culpa laboris ea aute Lorem laborum enim. Minim id culpa exercitation culpa consectetur do eiusmod.</p>
                </AboutBoxDiv2>
            </div>
        </div>
        <div className="about-layer-div">
            <div id="about-box-div-3" className="about-box">
                <AboutBoxDiv3>
                    <h1>COMPANY HISTORY</h1>
                    <p>Pariatur cupidatat ullamco ad nisi aute excepteur cillum incididunt do. Voluptate sunt excepteur occaecat consectetur. Officia proident adipisicing officia occaecat officia. Velit veniam elit excepteur deserunt mollit proident voluptate enim. </p>
                    <p>Nostrud consequat pariatur ex voluptate velit enim reprehenderit laborum officia proident proident irure qui officia. </p>
                </AboutBoxDiv3>
            </div>
            <div id="about-box-div-4" className="about-box">
                <div>
                    <Img fluid={props.data.background.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image" />
                </div>
            </div>
        </div> 
        <div className="about-layer-div">
            <div id="about-box-div-5" className="about-box">
                <AboutBoxDiv5>
                    <h1>CLIENTS</h1>
                    <div id="logo-div">
                        <>
                        <Img fixed={props.data.logos.edges[0].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img fixed={props.data.logos.edges[1].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img fixed={props.data.logos.edges[2].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img fixed={props.data.logos.edges[0].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img fixed={props.data.logos.edges[1].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img fixed={props.data.logos.edges[2].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img class="non-display" fixed={props.data.logos.edges[0].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img class="non-display" fixed={props.data.logos.edges[1].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img class="non-display" fixed={props.data.logos.edges[2].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img class="non-display" fixed={props.data.logos.edges[0].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img class="non-display" fixed={props.data.logos.edges[1].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                        <>
                        <Img class="non-display" fixed={props.data.logos.edges[2].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                        </>
                    </div>
                </AboutBoxDiv5>
            </div>
        </div> 
        <div className="about-layer-div">
            <div id="about-box-div-6" className="about-box">
                <AboutBoxDiv6>
                    <h1>GET IN TOUCH ›</h1>
                    <p>QUESTIONS? COMMENTS? GIVE US A CALL.</p>
                </AboutBoxDiv6>
            </div>
        </div> 
    </Layout>
)
  
export default About

export const query = graphql`
  query sectionBackground {
    background: allFile(filter: {relativePath: {glob: "about/background*"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    logos: allFile(filter: {relativePath: {glob: "about/logo*"}}) {
        edges {
          node {
            childImageSharp {
              fixed(width: 150, height: 75) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
  }
`