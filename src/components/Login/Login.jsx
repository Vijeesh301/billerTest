import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import logo from "../../assets/images/logos/logo-light.svg";
import { useNavigate } from "react-router-dom";
import * as api from "../../constants/api";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [authErrResp, setAuthErrResp] = useState();

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const authLogin = () => {
    if (formValues.email !== "" || formValues.password !== "") {
      setIsLoading(true);
      try {
        api.login(formValues).then((res) => {
          setIsLoading(false);
          if (res?.status === 200) {
            navigate("/main-page");
            localStorage.setItem("token", res.data.data.token);
            const token = res.data.data.token;
            const arrayToken = token?.split(".");
            const tokenData = JSON.parse(atob(arrayToken[1]));
            localStorage.setItem("userId", tokenData.UserId);
          }
          setAuthErrResp(res?.response?.data);
          return res;
        });
      } catch (err) {
        setIsLoading(false);
        return err;
      }
    }
  };

  return (
    <>
      <Row className="m-0 bg-[#e7faff] flex justify-center h-[100svh] items-center">
        <Col xs={10} sm={6} md={6} lg={4} className="flex justify-center">
          <div className="bg-[white] shadow-md p-4 w-[23rem]">
            <div className="h-[30rem]">
              <div>
                <div className="justify-center flex mt-3">
                  <img style={{ width: "15rem" }} src={logo} />
                </div>
                <div className="my-4">
                  <p className="text-center text-[17px]">Sign In</p>
                </div>
                <div>
                  <Form className="p-2">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        onChange={(e) => onChange(e)}
                        type="email"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        onChange={(e) => onChange(e)}
                        type="password"
                      />
                    </Form.Group>
                  </Form>
                  <div>
                    <p className="text-[15px] font-semibold cursor-pointer text-[#729c9c]">
                      Forgot Password?
                    </p>
                  </div>
                  <div className="grid mt-5">
                    <Button
                      disabled={!formValues.email || !formValues.password}
                      onClick={authLogin}
                      variant="info"
                      className="!font-semibold !text-[white] !rounded-[15rem]"
                    >
                      {isLoading ? "Please Wait..." : "Sign In"}
                    </Button>
                  </div>
                  {authErrResp?.status === false && (
                    <div className="mt-2">
                      <p className="text-[#d85454] text-center text-[13px]">
                        {authErrResp?.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
