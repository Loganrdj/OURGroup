/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import "./layout.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => {
  
  return (
    <>
      <Navbar />
        <Wrapper>
          {/* <Header siteTitle={data.site.siteMetadata?.title || `OURGroup`} /> */}
          <main>{children}</main>
        </Wrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
