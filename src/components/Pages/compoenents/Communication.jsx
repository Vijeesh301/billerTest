import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Communication = () => {
  // smtp_enabled Boolean(mandatory) POST smtp_host String POST smtp_user
  // String POST smtp_pass String POST smtp_tls String POST mail_from_nam e
  // String POST mail_from_email String */

  const [formValues, setFormValues] = useState({
    smtp_enabled: "N",
    smtp_host: "",
    smtp_user: "",
    smtp_pass: "",
    smtp_tls: "",
    mail_from_name: "",
    mail_from_email: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.targe.name]: e.target.value,
    });
  };

  const checkBoxChange = (e) => {
    if (e.target.checked) {
      setFormValues({
        ...formValues,
        [e.targe.name]: "Y",
      });
    } else {
      setFormValues({
        ...formValues,
        [e.targe.name]: "N",
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="shadow-md w-[80%] p-2">
        <Row>
          <p className="text-19px font-semibold">Email Settings</p>
          <Col sm={12} md={12} lg={6}>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="txtbucketname"
                    placeholder="Organisation Email"
                    name="mail_from_email"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label">Organisation Email</label>
                  <p className="text-[gray] text-[11px] mt-1">
                    Your email address from your email will be send
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <select
                    className="select2 form-control custom-select"
                    id="sttype"
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="">Select Server Type</option>
                    <option value="1">SMTP</option>
                    <option value="2">Server Mail(Default)</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="txtbucketname"
                    placeholder="SMTP Username"
                    name="s3_secretkey"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label">SMTP Username</label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="txtbucketname"
                    placeholder="Bucket Name"
                    name="s3_secretkey"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label">SMTP Port</label>
                  <p className="text-[gray] text-[11px] mt-1">
                    Which port does your SMPT server use? most used 587 for LTS,
                    and 465 for SSL encryption.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="txtbucketname"
                    placeholder="Form Name"
                    name="s3_region"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label">Form Name</label>
                  <p className="text-[gray] text-[11px] mt-1">
                    Name you need to display on FROM email address.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="txtbucketname"
                    placeholder="SMTP Host"
                    name="s3_secretkey"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label">SMTP Host</label>
                  <p className="text-[gray] text-[11px] mt-1">
                    Your SMTP account host name, can be IP, domain or subdomain.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="txtbucketname"
                    placeholder="SMTP Password"
                    name="s3_secretkey"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label">SMTP Password</label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div class="form-floating mb-2">
                  <select
                    className="select2 form-control custom-select"
                    id="sttype"
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="">Select Server Type</option>
                    <option value="1">SMTP</option>
                    <option value="2">Server Mail(Default)</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <p className="text-19px !mt-[5rem] font-semibold">SMS Settings</p>
          <div className="ml-3 form-check mb-2">
            <input
              onChange={(e) => checkBoxChange(e)}
              className="form-check-input"
              type="checkbox"
              id="smsenable"
            />
            <label className="form-check-label">Enable SMS</label>
          </div>
          <Col sm={12} md={12} lg={6}>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="txtbucketname"
                    placeholder="SMS Host"
                    name="s3_region"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label">SMS Host</label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="txtbucketname"
                    placeholder="SMS Password"
                    name="s3_secretkey"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label">SMS Password</label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="txtbucketname"
                    placeholder="SMS User"
                    name="s3_region"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label">SMS User</label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="txtbucketname"
                    placeholder="SMS Form"
                    name="s3_secretkey"
                    onChange={(e) => handleChange(e)}
                  />
                  <label className="form-label">SMS Form</label>
                  <p className="text-[gray] text-[11px] mt-1">
                    Alias/number regitration with the SMS provider.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Row className="mt-5 mb-3">
            <Col>
              <Button className="!w-[5rem] !rounded-[20px]">
                {/* {isLoading ? "Wait..." : "Save"} */}
                Save
              </Button>
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default Communication;
