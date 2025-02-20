import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import * as api from "../../../constants/api";
import { Toaster, toast } from "react-hot-toast";

const Storage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    s3_type: "N",
    s3_bucket: "N",
    s3_accesskey: "",
    s3_secretkey: "",
    s3_endpoint: "",
    s3_region: "",
  });

  const createStorage = async () => {
    setIsLoading(true);
    const bodyData = {
      user_id: parseInt(localStorage.getItem("userId")),
      s3_type: formValues.s3_type,
      s3_bucket: formValues.s3_bucket,
      s3_accesskey: formValues.s3_accesskey,
      s3_secretkey: formValues.s3_secretkey,
      s3_endpoint: formValues.s3_endpoint,
      s3_region: formValues.s3_region,
    };
    try {
      await api.createStorage(bodyData).then((res) => {
        if (res?.data?.status === true) {
          toast.success(res?.data?.message);
          setFormValues({
            ...formValues,
            s3_type: "N",
            s3_bucket: "N",
            s3_accesskey: "",
            s3_secretkey: "",
            s3_endpoint: "",
            s3_region: "",
          });
        }
        setIsLoading(false);
        return res;
      });
    } catch (err) {
      setIsLoading(true);
      return err;
    }
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const radioHandleChange = (e) => {
    if (e.target.checked === true) {
      setFormValues({
        ...formValues,
        [e.target.name]: "Y",
      });
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: "N",
      });
    }
  };

  const radioHandleChange2 = (e) => {
    if (e.target.checked === true) {
      setFormValues({
        ...formValues,
        [e.target.name]: "Y",
      });
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: "N",
      });
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex justify-center">
        <div className="shadow-md w-[80%] p-2">
          <Row>
            <Col sm={12} md={12} lg={6}>
              <Row className="mb-3">
                <Col>
                  <input
                    checked={formValues.s3_type === "Y" ? true : false}
                    onChange={(e) => radioHandleChange(e)}
                    className="form-check-input"
                    type="radio"
                    id="chbstoragewb"
                    name="s3_type"
                  />
                  <label className="form-check-label">
                    Enable Wasabi S3 storage
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-floating mb-2">
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      class="form-control"
                      id="txtbucketname"
                      placeholder="Bucket Name"
                      name="s3_region"
                    />
                    <label className="form-label">Bucket Name</label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-floating mb-2">
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      class="form-control"
                      id="txtbucketname"
                      placeholder="Bucket Name"
                      name="s3_secretkey"
                    />
                    <label className="form-label">S3 Secret Key</label>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Row className="mb-3">
                <Col>
                  <input
                    checked={formValues.s3_bucket === "Y" ? true : false}
                    onChange={(e) => radioHandleChange2(e)}
                    className="form-check-input"
                    type="radio"
                    id="chbstoragewb"
                    name="s3_bucket"
                  />
                  <label className="form-check-label">
                    Enable Amazon S3 storage
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-floating mb-2">
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      class="form-control"
                      id="txtbucketname"
                      placeholder="Bucket Name"
                      name="s3_accesskey"
                    />
                    <label className="form-label">S3 Key/Access Key</label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="form-floating mb-2">
                    <input
                      onChange={(e) => handleChange(e)}
                      type="text"
                      class="form-control"
                      id="txtbucketname"
                      placeholder="Bucket Name"
                      name="s3_endpoint"
                    />
                    <label className="form-label">
                      S3 Custom end point (option)
                    </label>
                  </div>
                </Col>
              </Row>
            </Col>
            <Row className="mt-5 mb-3">
              <Col>
                <Button
                  disabled={
                    !formValues.s3_endpoint ||
                    !formValues.s3_region ||
                    !formValues.s3_secretkey ||
                    !formValues.s3_accesskey
                  }
                  className="!w-[5rem] !rounded-[20px]"
                  onClick={createStorage}
                >
                  {isLoading ? "Wait..." : "Save"}
                </Button>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Storage;
