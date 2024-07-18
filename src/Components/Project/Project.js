import React, { useState } from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap';
import FrontEnd from './FrontEnd/FrontEnd';
import BackEnd from './BackEnd/BackEnd';

function Project() {
    const [showFrontEnd, setShowFrontEnd] = useState(30);
    return (
        <>
            <Row className='mt-5'>
                <Col></Col>
                <Col xs={9}>
                    <div className=' text-light py-2'>Project</div>
                    <ProgressBar variant='Primary' now={showFrontEnd} className=' bg-warning' style={{ height: '5px' }} />

                    <div className='d-flex justify-content-between pt-4  px-sm-5 gap-2 '>
                        <button onClick={() => setShowFrontEnd(30)} className={showFrontEnd === 30 ? 'btn btn-primary shadow rounded-5' : 'btn btn-dark shadow rounded-5'}>Frontend</button>
                        <button onClick={() => setShowFrontEnd(70)} className={showFrontEnd === 70 ? 'btn btn-primary shadow rounded-5' : 'btn btn-dark shadow rounded-5'}>Backend</button>
                    </div>

                    {showFrontEnd === 30 && <div className=' text-light'>  <FrontEnd />   </div>}
                    {showFrontEnd === 70 && <div className=' text-light'>  <BackEnd />    </div>}

                </Col>
                <Col></Col>
            </Row>
        </>
    )
}

export default Project