import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img from "gatsby-image";
import styled from "styled-components";


const StyledImage = styled.div`
    border-radius: 1rem;
    padding-right: 10px;
    max-width: 80rem;
    margin: 0 auto;
    margin-bottom: 2rem;
  `;

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      
        <StaticQuery query={graphql`
            query carouselIndexQuery {
                allFile(filter: {relativePath: {glob: "building*"}}) {
                  edges {
                    node {
                      childImageSharp {
                        fluid(maxWidth: 1000, maxHeight: 500) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            `} 
            render={data => (
                <Slider {...settings}>
                    <div>
                        <StyledImage>
                            <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} alt="Hello"/>
                        </StyledImage>
                    </div>
                    <div>
                        <StyledImage>
                            <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} alt="Hello"/>
                        </StyledImage>
                    </div>
                    <div>
                        <StyledImage>
                            <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} alt="Hello"/>
                        </StyledImage>
                    </div>
                    <div>
                        <StyledImage>
                            <Img fluid={data.allFile.edges[3].node.childImageSharp.fluid} alt="Hello"/>
                        </StyledImage>
                    </div>
                    <div>
                        <StyledImage>
                            <Img fluid={data.allFile.edges[4].node.childImageSharp.fluid} alt="Hello"/>
                        </StyledImage>
                    </div>
                </Slider>
            )}
        />
    );
  }