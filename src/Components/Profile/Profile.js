import React, { useEffect, useState } from 'react'
import logo from '../../assets/6caf62a9929ca120668d0a936c5c3719.jpg'
import { Col, Row } from 'react-bootstrap'
import { ReactTyped } from 'react-typed'
function Profile(prop) {

    return (
        <div>
            <Row>
                <Col ></Col>
                <Col >
                    <img className='w-100 shadow-lg rounded-circle' src={logo} />
                </Col>
                <Col ></Col>
            </Row>
            <div className=' text-center text-light mt-4'>
                <div className='fs-5'>
                    Hey
                </div>
                <div className='fs-3 fw-bold'>
                    I'm Chirapong Phomphoo
                </div>
                <div className='fs-4'>
                    <ReactTyped strings={["Fullstack <span className=' text-danger'  style='color:orange'>Developer</span>"]} typeSpeed={50} />

                </div>
            </div>
            <Row>
                <Col  ></Col>
                <Col xs={7} >
                    <div className=' text-center text-light mt-2'>
                        Never stop learning and keep going to goal.
                        Work life balance is important.
                        Always committed to developing and following new technology.
                    </div>
                    <div className='d-flex flex-sm-row flex-column justify-content-between pt-4  px-lg-5  gap-1'>
                        <button onClick={() => prop.setToggle('About')} className='btn btn-dark shadow rounded-5  mx-md-0 small'>Learn More</button>
                        <button onClick={() => prop.setToggle('Contact')} className='btn btn-dark shadow rounded-5  mx-md-0 small'>Contact me</button>
                    </div>
                </Col>
                <Col ></Col>
            </Row>
        </div>
    )
}

export default Profile