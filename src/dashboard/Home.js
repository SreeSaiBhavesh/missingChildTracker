import React, { useEffect, useState } from "react";
import HeaderTitle from "../components/Header";
import SideNav from "./SideNav";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import Dash from "../images/lo.jpg";
import { Row, Col, Card } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav1 = useNavigate();
  const nav2 = useNavigate();
  const nav3 = useNavigate();

   const [value, setValue] = useState(new Date());
  // to set data coming from api
   //const [dash, setDash] = useState({});
  // to aware data is loading
  //const [loading, setLoading] = useState(true);
 // const select = useSelector((state) => state.reducers);
   //const dashboardApi = async () => {
  //   const getApi = await axios({
  //     url: "https://ymissing.herokuapp.com/api/admin/dash",
  //     method: "GET",
  //     headers: {
  //       apptoken: "App Token " + select.token,
  //     },
  //   });
  //   console.log(getApi.data);
  //   setDash(getApi.data);
  //   setLoading(false);
  // };
   //useEffect(() => {
     //dashboardApi();
  // }, []);
  // const handleMis = () => {
   //  nav1("/listmissing");
 //  };
 //const handlesubmit = () => {
 //    nav2("/submitlist");
  // };
  // const handlefound = () => {
   //  nav3("/listfound");
   //};
  return (
    <div>
      <HeaderTitle />
      <SideNav>
        <h2>Welcome to Home Page</h2>
        <Layout className="site-layout">
          <Content style={{ overflow: "initial", margin: "1px 15px 0" }}>
            <img src={Dash} alt="" height={425} width="52%" /> <br /> <br />
            <span>You</span> are in the right place to find a Missing Child,You
            can post your content here. This Website let every user to know the missing childs. They can even participate and take part in searching
            or helping in finding the missing child{" "}
            <br />
          </Content>
          <Sider className="sider">
            <Calendar onChange={setValue} value={value} className="calendar" />
          </Sider>
        </Layout>
      </SideNav>
    </div>
  );
};

export default Home;
