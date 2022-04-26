import React from "react";
import HeaderTitle from "../components/Header";
import SideNav from "./SideNav";
import img from "../images/profile/Bhavesh.jpeg"
import img2 from "../images/profile/preeti.jpeg"
import "../style/profile.css";
import {Popover} from 'antd'

const AboutPro = () => {
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
          About Project
        </h2>
         

        <p>This Project is all about the helping the missed child to get find through posting the relevant data about the missed child.
            In this Web application we have features to file a case, and also to check the missing children data. </p>
        <h2>Usage: </h2>
        <p>If u find any child missing, kidnapped by someone and wanted to reach the public about the information it is good in using this website 
            where you can give all the inputs as you give in filing the case but here you can save a lot of time and make reach the public well.
            You need to give the details of the child who is missing like his/her name or clothes worn or last seen etc and also your basic information
            for the validation or the safety purposes. 
        </p>
        <br />

        
        
      </SideNav>
    </>
  );
};

export default AboutPro;