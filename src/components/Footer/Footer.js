import React from "react";
import "./footer.css";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import LogoGreen from "../NavBar/LogoGreen";

const FooterWrap = styled.div`
    padding-top: 3%;
    padding-bottom: 2%;
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: 13%;
    padding-right: 14%;
    background-color: rgb(248,248,255);
    
`

const Footer = () => {
    return (
        <>
            <FooterWrap>
                <div id="footer-logo">
                    <LogoGreen></LogoGreen>
                </div>
                <div id="footer-links">
                    <Link to="/about" className="footer-link" activeClassName="active-link">About Us</Link>
                    <Link to="/projects" className="footer-link" activeClassName="active-link">Projects</Link>
                    <Link to="/research" className="footer-link" activeClassName="active-link">Research</Link>
                    <Link to="/news" className="footer-link" activeClassName="active-link">News</Link>
                    <Link to="/contact" className="footer-link" activeClassName="active-link">Contact Us</Link>
                </div>
                <div id="address-div">
                    <p id="address-title"><strong>Address</strong></p>
                    <p id="address-info">Laborum minim culpa veniam voluptate nulla et fugiat duis incididunt velit ullamco enim voluptate.</p>
                </div>
                <div id="contact-div">
                    <p id="contact-title"><strong>Contact Us</strong></p>
                    <p id="contact-info">Occaecat anim amet laborum magna officia ipsum.</p>
                </div>
            </FooterWrap>
        </>
    )
}

export default Footer