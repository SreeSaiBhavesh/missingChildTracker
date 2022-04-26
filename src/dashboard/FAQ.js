import React from "react";
import questions from "./Faq.json";
import Banner from "./Banner";
//import { TextField } from '@material-ui/core';
import SideNav from "./SideNav";
import HeaderTitle from "../components/Header";
import Layout from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Typography, Form, Input, Button } from "antd";
import { useSelector } from "react-redux";
//export function App() {
const App = () => {
    const { Title } = Typography;

  // to get token stored in redux store
  const selector = useSelector((state) => state.reducers);
  // for upload click button
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  //  navigation to redirect to list missing data
  const nav = useNavigate();
  // function to handle form data
  const onFinish = async (values) => {
    nav("/listmissing");
  };
  return (
    <Banner>
      <Banner.Header>Frequently Asked Questions</Banner.Header>
      {questions.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answer}</Banner.Text>
        </Banner.Entity>
      ))}
      <h3>
        Question not on the list? Add Your Question
      </h3>
      <h3>Add a Question</h3>
      <Form.Item name="name">
                <Input
                  placeholder="Give Your Question"
                  bordered={true}
                  
                  required
                ></Input>
              </Form.Item>
              <Button type="primary" style={{ marginLeft: 45, marginTop: 70 }}>
            Submit
          </Button>{" "}
    </Banner>
  );
}

export default App;