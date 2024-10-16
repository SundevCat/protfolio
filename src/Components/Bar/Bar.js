import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'

function Bar(prop) {
    return (
        <Row >
            <Col></Col>
            <Col xs={9}>
                <div className=' text-end text-light py-2'>{prop.header}</div>
                <ProgressBar variant='Primary' now={prop.now} className=' bg-warning ' style={{ height: '5px' }} />
                <div className='pt-5'>

                    {prop.children}
                </div>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Bar