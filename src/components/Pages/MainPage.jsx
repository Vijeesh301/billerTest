import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  CardHeader,
} from "react-bootstrap";
import Heade from "./compoenents/Heade";
import spike from "../../assets/images/logos/logo-light.svg";
import * as api from "../../constants/api";
import { TbServer } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import Storage from "./compoenents/Storage";
import Communication from "./compoenents/Communication";
import { GoDotFill } from "react-icons/go";
import { MdOutlineMonitor } from "react-icons/md";
import profile from "../../assets/images/profile/user-1.jpg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  const [userSettingData, setUserSettingData] = useState([]);

  const [showSideBar, setShowSideBar] = useState(true);

  const [activeTab, setActiveTab] = useState(1);

  const userSetting = () => {
    try {
      api.getUserSettings(parseInt(userId)).then((res) => {
        setUserSettingData(res.data.data.result);
        return res;
      });
    } catch (err) {
      return err;
    }
  };

  const logout = () => {
    navigate("/");
    localStorage.clear();
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  };

  useEffect(() => {
    userSetting();
  }, []);

  return (
    <>
      <div className="flex">
        {showSideBar ? (
          <div className="sideBarBig w-[20rem] sm:hidden">
            <div className="sticky top-0 z-999">
              <div className="mt-4 ml-4">
                <img src={spike} />
              </div>
              <div className="ml-4 mt-4">Home</div>
              <div className="ml-[2rem] text-[18px] mt-4 font-semibold flex items-center cursor-pointer">
                <MdOutlineMonitor className="text-[22px] mr-2" />
                Settings
              </div>
            </div>
            <div className="bottomCard w-[15rem] h-[6rem] rounded-lg bg-[#e4f0f5] p-2 flex items-center">
              <div>
                <img
                  style={{ width: "3.5rem", borderRadius: "50px" }}
                  src={profile}
                />
              </div>
              <div className="ml-2 flex items-center">
                <div>
                  <div className="font-semibold">Mike</div>
                  <div className="text-[12px] text-[gray]">Admin</div>
                </div>
                <div className="ml-[5rem] text-[12px] text-[gray]">
                  <RiLogoutCircleRLine
                    className="text-[1.5rem] cursor-pointer"
                    onClick={logout}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="sideBar w-[5rem] overflow-hidden">
            <div className="sticky top-0 z-999">
              <div className="ml-4 mt-4 w-[15rem]">
                <img src={spike} />
              </div>
              <div className="ml-[1rem] text-[18px] mt-4">
                <MdOutlineMonitor className="text-[22px] mr-2" />
              </div>
            </div>
          </div>
        )}
        <div className="w-full">
          <Row className="m-0">
            <Col lg={12}>
              <Container>
                <Row className="sticky top-0 z-999 mt-3">
                  <Col className="">
                    <Heade
                      userSettingData={userSettingData}
                      setShowSideBar={setShowSideBar}
                      showSideBar={showSideBar}
                    />
                  </Col>
                </Row>
                <Row className="mt-4 h-[100%]">
                  <Col>
                    <Row>
                      <Col>
                        <Card className="mb-4">
                          <CardHeader>
                            <div className="text-[14px] flex items-center">
                              Home{" "}
                              <GoDotFill className="mx-2 mt-1 text-[11px] text-[gray]" />{" "}
                              Setting{" "}
                              <GoDotFill className="mx-2 mt-1 text-[11px] text-[gray]" />{" "}
                              Organisation
                            </div>
                            <div className="text-[20px] mt-2 font-semibold">
                              Settings
                            </div>
                          </CardHeader>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card className="bg-[gray]">
                          <CardBody>
                            <div className="flex gap-4">
                              <div
                                onClick={() => {
                                  setActiveTab(1);
                                }}
                                className={`cursor-pointer ${
                                  activeTab === 1 &&
                                  "border-b-2 border-[#5ac3d1]"
                                } flex items-center gap-2`}
                              >
                                <TbServer className="text-[17px]" />
                                Storage
                              </div>
                              <div
                                onClick={() => {
                                  setActiveTab(2);
                                }}
                                className={`cursor-pointer ${
                                  activeTab === 2 &&
                                  "border-b-2 border-[#5ac3d1]"
                                } flex items-center gap-2`}
                              >
                                <CiGlobe className="text-[17px]" />
                                Communication
                              </div>
                            </div>
                            <div className="my-[40px]">
                              {activeTab === 1 && <Storage />}
                              {activeTab === 2 && <Communication />}
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default MainPage;
