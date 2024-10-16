import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import about from '../../assets/about.png'

function About_me() {
    return (
        <div>
            <Row className=' justify-content-center mt-5 gap-3 '>
                <Col sm={4} className='d-flex d-sm-block justify-content-center'>
                    <Image className='w-sm-100 w-75 d-block m-auto shadow p-2' src={about} rounded />
                </Col>
                <Col sm={4} className='text-light px-5 px-sm-0'>
                    <div className=' fs-5 fw-bold text-center text-sm-start'> About Me</div>
                    <div className='mt-2 text-center text-sm-start'>
                    Hello, I am a Fullstack Developer with over a year of experience working with technologies like React, Angular, Laravel, Next.js, Node.js, Express.js, and others.
                    My goal is to become an expert in Fullstack Development and create efficient websites.
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default About_me