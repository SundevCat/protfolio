import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import logo from '../../assets/6caf62a9929ca120668d0a936c5c3719.jpg'

function About_me() {
    return (
        <div>
            <Row className=' justify-content-center mt-5 gap-3 '>
                <Col sm={4} className='d-flex d-sm-block justify-content-center'>
                    <Image className='w-sm-100 w-75 d-block m-auto' src={logo} rounded />
                </Col>
                <Col sm={4} className='text-light px-5 px-sm-0'>
                    <div className=' fs-5 fw-bold text-center text-sm-start'> About Me</div>
                    <div className='mt-2 text-center text-sm-start'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, labore impedit quis repellendus odit magnam consectetur similique illum! Velit, nobis.</div>
                </Col>
            </Row>
        </div>
    )
}

export default About_me