import React from "react";
import "./pagestyles.css";
import Layout from "../components/Layout";

const About = () => (
    <Layout>
        <div class="about-layer-div">
            <div id="about-box-div-1" class="about-box">
                1
            </div>
            <div id="about-box-div-2" class="about-box">
                <h1>Urban Renewal Defined.</h1>
            </div>
        </div>
        <div class="about-layer-div">
            <div id="about-box-div-3" class="about-box">
                <h1>Company History</h1>
            </div>
            <div id="about-box-div-4" class="about-box">
                4
            </div>
        </div> 
        <div class="about-layer-div">
            <div id="about-box-div-5" class="about-box">
                5
            </div>
        </div> 
        <div class="about-layer-div">
            <div id="about-box-div-6" class="about-box">
                <h1>Clients</h1>
                <p>Insert Logos here</p>
            </div>
        </div> 
    </Layout>
)
  
export default About