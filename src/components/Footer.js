import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from "gatsby"

const LogoWrap = styled.div`
    margin: auto 0;
    flex: 0 1 36px;

    @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
    }
`
const FooterWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: 13%;
    padding-right: 14%;
    background-color: rgb(248,248,255);
    justify-content: space-between;
    
`


const Footer = () => {
    return (
        <>
            <FooterWrap>
                <div>
                    <StaticQuery query={graphql`
                        query footerQuery {
                            file(relativePath: {eq: "OURGroupLogoGreen.png"}) {
                                childImageSharp {
                                    fixed(height: 140) {
                                    ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }`} render={data => (
                        <LogoWrap as={Link} to="/">
                            <Img fixed={data.file.childImageSharp.fixed} />
                        </LogoWrap>
                        )}
                    />
                </div>
                <h1>hello</h1>
            </FooterWrap>
        </>
    )
}

export default Footer