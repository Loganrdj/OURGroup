import React, { useHistory, useState, useEffect } from 'react';
import { Link } from "gatsby";
import { withPrefix } from "gatsby-link"
import { FaAlignJustify } from "react-icons/fa"
import "./nav.css";
import Logo from "./Logo";
import { styled } from 'styled-components';
var classNames = require("classnames");

// const Navigation = styled.nav`
//   height: 10vh;
//   display: flex;
//   background-color: #fff;
//   position: relative;
//   justify-content: space-around;
//   text-transform: uppercase;
//   border-bottom: 2px solid #33333320;
//   margin: 0 auto;
//   padding: 0 5vw;
//   z-index: 2;
//   align-self: center;
  

//   @media (max-width: 768px) {
//   position: sticky;
//   height: 8vh;
//   top: 0;
//   left: 0;
//   right: 0;
//   left: 0;
//   }
// `
// const Toggle = styled.div`
//   display: none;
//   height: 100%;
//   cursor: pointer;
//   padding: 0 10vw;

//   @media (max-width: 768px) {
//     display: flex;
//   }
// `

// const Navbox = styled.div`
//   display: flex;
//   height: 100%;
//   width:100%;
//   justify-content: flex-end;
//   align-items: center;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     position: fixed;
//     width: 100%;
//     justify-content: flex-end;
//     padding-top: 100vh;
//     background-color: #fff;
//     transition: all 0.3s ease-in;
//     top: 8vh;
//     left: ${props => (props.open ? "-100%" : "0")};
//   }
// `

// const Hamburger = styled.div`
//   background-color: #111;
//   width: 30px;
//   height: 3px;
//   transition: all .3s linear;
//   align-self: center;
//   position: relative;
//   transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

//   ::before,
//   ::after {
//     width: 30px;
//     height: 3px;
//     background-color: #111;
//     content: "";
//     position: absolute;
//     transition: all 0.3s linear;
//   }

//   ::before {
//     transform: ${props =>
//       props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
//     top: -10px;
//   }

//   ::after {
//     opacity: ${props => (props.open ? "0" : "1")};
//     transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
//     top: 10px;
//   }
// `
function openNav() {

  // console.log(window.location.pathname)
}

var navBackgroundImage = classNames.bind({
  width: "100%",
  height: "400px",
  backgroundImage: "url(images.unsplash.com/photo-1503951458645-643d53bfd90f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80) !important"
});
// Helper called classNames

const Navbar = () => {

  const [url, setUrl] = useState("");

  useEffect(()=> {
    
  }, [url])
  
  return (
    <nav className={url === "about" ? "navbar navbar-background-image" : "navbar"}>
        <div className="nav-links">
          <Link to="/" onClick={() => setUrl("")} className="nav-link" activeClassName="active-link">Home</Link>
          <Link to="/about" onClick={() => setUrl("about")} className="nav-link" activeClassName="active-link">About</Link>
          <Link to="/projects" onClick={() => setUrl("projects")} className="nav-link" activeClassName="active-link">Projects</Link>
          <Link to="/" onClick={() => setUrl("")} id="title"><Logo></Logo></Link>
          <Link to="/research" onClick={() => setUrl("research")} className="nav-link" activeClassName="active-link">Research</Link>
          <Link to="/news" onClick={() => setUrl("news")} className="nav-link" activeClassName="active-link">News</Link>
          <Link to="/contact" onClick={() => setUrl("contact")} className="nav-link" activeClassName="active-link">Contact</Link>
        </div>
        <div>
          <button id="nav-btn-true" onClick={openNav}><FaAlignJustify id="nav-btn"/></button>
        </div>
    </nav>
  )


    // return (
    //     <Navigation>
    //         <Toggle
    //         navbarOpen={navbarOpen}
    //         onClick = {() => setNavbarOpen(!navbarOpen)}
    //         >
    //             {navbarOpen ? <Hamburger open /> : <Hamburger />}
    //         </Toggle>
    //         {navbarOpen ? (
    //             <Navbox>
    //                 <NavbarLinks />
    //             </Navbox>
    //         ) : (
    //             <Navbox open>
    //                 <NavbarLinks />
    //             </Navbox>
    //         )}
    //     </Navigation>
    // )
}

export default Navbar