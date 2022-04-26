import React from "react";
import HeaderTitle from "../components/Header";
import SideNav from "./SideNav";
import "../style/profile.css";
import img from "../images/profile/Bhavesh.jpeg"
import img2 from "../images/profile/preeti.jpeg"
import {Popover} from 'antd'

const About = () => {
  const dipeshcontent = (
    <div className="profile">
      {}
      
    </div>
  );

  return (
    <>
      <HeaderTitle />
      <SideNav>
        <h2 className="heading">
          About Us
        </h2>
        <div className="container">
          <div className="profiles">
            <div className="profile">
              <img
                className="profile-img"
                height={40}
                width={40}
                src={img}
              />
              <h3 className="user-name">Bhavesh</h3>
              <h5>20BCE0348</h5>

            </div>
            <div className="profile">
              <img
                className="profile-img"
                height={40}
                width={40}
                src={img2}
              />
              <h3 className="user-name">Preeti Poddar</h3>
              <h5>20BCE0905</h5>

            </div>
          </div>
        </div>

        <p>We are Second Year Students pursuing BTECH in Vellore Institute of Technology, Vellore.</p>
        <br />

        
        
      </SideNav>
    </>
  );
};

export default About;
