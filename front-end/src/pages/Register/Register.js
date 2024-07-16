import React, { useEffect } from "react";
import { Form, Input, Button, Radio, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import { RegisterUser } from "../../calls/users";

function Register() {

  const navigate = useNavigate()
  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await RegisterUser(values);
      if (response.success) {
        message.success(response.message);
        navigate('/login')
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Register to Markt</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Name"
                htmlFor="name"
                name="name"
                className="d-block"
                rules={[{ required: true, message: "Name is required!" }]}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  rules={[{ required: true, message: "Email is required!" }]}
                ></Input>
              </Form.Item>
              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Email is required!" }]}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                ></Input>
              </Form.Item>
              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required!" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter the password"
                ></Input>
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Sign Up
                </Button>
              </Form.Item>
              <Form.Item
                // label="Register as a Partner"
                htmlFor="role"
                name="role"
                className="d-block text-center"
                initialValue="user" // Set the default role to "user"
                rules={[{ required: true, message: "Please select an option!" }]}
              >
                {/* Assuming you're using a Radio.Group or Select for role selection.
      Make sure to include the component here, e.g., Radio.Group or Select,
      with options for "user" and any other roles you support. */}
              </Form.Item>
            </Form>
            <div>
              <p>
                Already a user? <Link to="/login" className="link">Login now</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Register;