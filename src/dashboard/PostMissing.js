import React from "react";
import {
  Card,
  Input,
  Space,
  Button,
  Divider,
  Typography,
  Form,
  Upload,
} from "antd";
import SideNav from "./SideNav";
import { UploadOutlined } from "@ant-design/icons";
import HeaderTitle from "../components/Header";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const PostMissing = () => {
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
    let formData = {};
    formData["name"] = values.name;
    formData['male'] = values.male;
    formData['missing'] = values.missing;
    formData['Datetime'] = values.Datetime;
    formData['Worn'] = values.Worn;
    formData['Yourname'] = values.Yourname;
    formData['Gender'] = values.Gender;
    formData["location"] = values.location;
    formData["location1"] = values.location1;
    formData["contact_person"] = values.contact_person;
    formData["contact_number"] = values.contact_number;
    
    formData["Status"] = "Missing";
    let missing = JSON.parse(sessionStorage.getItem("MissingData"));
    console.log(formData);
    missing.push(formData)
    sessionStorage.setItem("MissingData", JSON.stringify(missing));
    // let postMissing = await axios({
    //   url: "https://ymissing.herokuapp.com/api/admin/missing",
    //   method: "POST",
    //   headers: {
    //     apptoken: "App Token " + selector.token,
    //   },
    //   data: formData,
    // });
    // console.log(postMissing.data);
    // if (postMissing.data.type === "error") {
    //   Swal.fire("Error", postMissing.data.msg, "error");
    // } else {
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: postMissing.data.msg,
    //     showConfirmButton: false,
    //     timer: 1500,
    //     toast: "true",
    //   });
    //   nav("/listmissing");
    // }
    nav("/listmissing");
  };

  return (
    <div>
      <HeaderTitle />
      <SideNav>
        <Card
          className="card"
          title={
            <Title level={2} style={{ color: "#007373" }}>
              Post Missing Person
            </Title>
          }
          style={{ margin: "auto" }}
        >
          <Form onFinish={onFinish}>
            <Space direction="vertical">
              <Form.Item name="name">
                <Input
                  placeholder="Child Name"
                  bordered={true}
                  
                  required
                ></Input>
              </Form.Item>
              <Form.Item name="male">
                <Input
                  placeholder="Child Gender"
                  bordered={true}
                  
                  required
                ></Input>
              </Form.Item>
              <Form.Item name="missing">
                <Input
                  placeholder="Missing Place"
                  bordered={true}
                  
                ></Input>
              </Form.Item>
              
              <Form.Item name="Datetime">
                <Input
                  placeholder="Missing time"
                  bordered={true}
                 
                  type="datetime-local"
                ></Input>
              </Form.Item>
              <Form.Item name="Worn">
                <Input
                  placeholder="Clothes Worn"
                  bordered={true}
                 
                ></Input>
              </Form.Item>
              <Form.Item name="Yourname">
                <Input
                  placeholder="Person(Your) Name"
                  bordered={true}
                  required
                ></Input>
              </Form.Item>
              <Form.Item name="Gender">
                <Input
                  placeholder="Your Gender"
                  bordered={true}
                  checked
                  required
                ></Input>
              </Form.Item>
              <Form.Item name="location">
                <Input
                  placeholder="Enter Your Address"
                  bordered={true}
                  required
                ></Input>
              </Form.Item>
              <Form.Item name="location1">
                <Input
                  placeholder="Enter Your State"
                  bordered={true}
                  required
                ></Input>
              </Form.Item>

              <Form.Item name="contact_person">
                <Input placeholder="Contact Person" bordered={true} required></Input>
              </Form.Item>

              <Form.Item name="contact_number">
                <Input placeholder="Contact Number" bordered={true} required></Input>
              </Form.Item>
              {/* field for photo upload */}
              <Form.Item
                name="image"
                // label="Upload"
                valuePropName="fileList"
                getValueFromEvent={sessionStorage}
                // extra="Upload Photo"
                required
              >
                <Upload
                  name="image"
                  listType="picture"
                  beforeUpload={() => false}
                >
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                  
                </Upload>
                
              </Form.Item>
              <Button
                htmlType="submit"
                className="login-form-button"
                type="primary"
              >
                Post
              </Button>
            </Space>
          </Form>
        </Card>
      </SideNav>
    </div>
  );
};

export default PostMissing;
