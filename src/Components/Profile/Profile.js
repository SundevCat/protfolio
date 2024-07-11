import React from 'react'
import logo from '../../assets/6caf62a9929ca120668d0a936c5c3719.jpg'
import { Col, Image, Row } from 'react-bootstrap'
function Profile() {
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quisquam ipsum modi, impedit quaerat mollitia, sequi debitis officia illum blanditiis iste. Sunt, impedit eius expedita quos animi eum vitae delectus sequi quas. Quas, laudantium ut facilis unde et consequatur laborum?
                    </div>
                    <div className='d-flex justify-content-between pt-4 px-4 px-md-5 '>
                        <button className='btn btn-dark shadow rounded-5'>Learn More</button>
                        <button className='btn btn-dark shadow rounded-5'>Contact me</button>
                    </div>
                </Col>
                <Col ></Col>
            </Row>
        </div>
    )
}

export default Profile