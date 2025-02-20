import React from 'react'
import { Card, CardBody, Col, Dropdown, Row } from 'react-bootstrap'
import { BiMenuAltLeft } from "react-icons/bi";
import profile from "../../../assets/images/profile/user-1.jpg";

const Heade = ({ userSettingData, setShowSideBar, showSideBar }) => {
  return (
   <>
   <Card className=''>
      <CardBody>
         <Row>
            <Col sm={12} md={6} lg={6}>
            <div className='flex justify-between cursor-pointer'>
           <div className='flex gap-3 items-center'>
                <BiMenuAltLeft onClick={() => setShowSideBar(!showSideBar)} className='text-[25px]' />
           <div className='cursor-pointer'>Chat</div>
           <div className='cursor-pointer'>Calendar</div>
           <div className='cursor-pointer'>Email</div>
            </div> 
            </div> 
            </Col>
            <Col sm={12} md={6} lg={6}>
               <Row>
               <Col sm={12} md={12} lg={6} className='flex justify-end'>
               <div className='flex items-center'>
                  <input placeholder='Try to searching...' className='pl-2 h-[35px] items-center border-1 rounded-[15px] border-[#a5a1a1] w-[15rem]' />
               </div>  
               </Col>
               <Col sm={12} md={12} lg={6} className='flex justify-end'>
               <div className='flex'>
               <div className='w-[3rem]'>
                  <img style={{width : "90%", borderRadius: "50px" }} src={profile} />
               </div>
               <div>
               <div className='font-semibold'>{userSettingData?.display_name}</div>
               <div className='text-[13px]'>{userSettingData?.description}</div>
               </div>
               </div>
               </Col>
               </Row>           
            </Col>
         </Row>
      </CardBody>
   </Card>
   
   </>
  )
}

export default Heade
