import React, { useHistory, useState, useEffect } from 'react';
import { Link } from "gatsby";
import { withPrefix } from "gatsby-link"
import { FaAlignJustify } from "react-icons/fa"
import "./nav.css";
import Logo from "./Logo";
import { styled } from 'styled-components';

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

// Helper called classNames

const Navbar = () => {

  // const [url, setUrl] = useState("");

  // // useEffect(()=> {
  // //   console.log(props)
  // // }, [url])

  return (
    <div id="green-box" className={window.location.pathname === withPrefix("/about") ? "navbar-background-image" : ""}>
      <div className={window.location.pathname === withPrefix("/about") ? "navbar green-box" : "navbar"}>
          <div className="nav-links">
            <Link to="/" state={{urlTo: "/"}} className="nav-link" activeClassName="active-link">HOME</Link>
            <Link to="/about" state={{urlTo: "about"}} className="nav-link" activeClassName="active-link">ABOUT</Link>
            <Link to="/projects" state={{urlTo: "projects"}} className="nav-link" activeClassName="active-link">PROJECTS</Link>
            <Link to="/" state={{urlTo: "/"}} id="title"><Logo></Logo></Link>
            <Link to="/research" state={{urlTo: "research"}} className="nav-link" activeClassName="active-link">RESEARCH</Link>
            <Link to="/news" state={{urlTo: "news"}} className="nav-link" activeClassName="active-link">NEWS</Link>
            <Link to="/contact" state={{urlTo: "contact"}} className="nav-link" activeClassName="active-link">CONTACT</Link>
          </div>
          <div>
            <button id="nav-btn-true" onClick={openNav}><FaAlignJustify id="nav-btn"/></button>
          </div>
      </div>
    </div>
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