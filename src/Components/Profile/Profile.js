import React from 'react'
import logo from '../../assets/6caf62a9929ca120668d0a936c5c3719.jpg'
import { Col, Image, Row } from 'react-bootstrap'
function Profile(prop) {
    return (
        <div>
            <Row>
                <Col ></Col>
                <Col >
                    <Image className='w-100 shadow-lg' src={logo} roundedCircle />
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
                    Fullstack Developer
                </div>
            </div>
            <Row>
                <Col  ></Col>
                <Col xs={7} >
                    <div className=' text-center text-light mt-2'>
                        Never stop learning. Keep going to goal. Always committed to developing and following new technology.
                    </div>
                    <div className='d-flex justify-content-between pt-4  px-lg-5 '>
                        <button onClick={() => prop.setToggle('About')} className='btn btn-dark shadow rounded-5 mx-2 mx-md-0'>Learn More</button>
                        <button onClick={() => prop.setToggle('Contact')} className='btn btn-dark shadow rounded-5 mx-2  mx-md-0'>Contact me</button>
                    </div>
                </Col>
                <Col ></Col>
            </Row>
        </div>
    )
}

export default Profile