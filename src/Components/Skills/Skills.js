import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'

function Skills() {
    return (
        <>
            <Row className='mt-5'>
                <Col></Col>
                <Col xs={9}>
                    <div className=' text-end text-light py-2'>Skills</div>
                    <ProgressBar variant='Primary' now={70} className=' bg-warning' style={{ height: '5px' }} />
                </Col>
                <Col></Col>
            </Row>
        </>
    )
}

export default Skills