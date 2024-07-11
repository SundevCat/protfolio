import React, { useState } from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap';

function Project() {
    const [showFrontEnd, setShowFrontEnd] = useState(true);
    return (
        <>
            <Row className='mt-5'>
                <Col></Col>
                <Col xs={9}>
                    <div className=' text-light py-2'>Project</div>
                    <ProgressBar variant='Primary' now={showFrontEnd ? 70 : 30} className=' bg-warning' style={{ height: '5px' }} />

                    <div className='d-flex justify-content-between pt-4 px-4 px-md-5 '>
                        <button onClick={() => setShowFrontEnd(true)} className={showFrontEnd ? 'btn btn-primary shadow rounded-5' : 'btn btn-dark shadow rounded-5'}>Front-End</button>
                        <button onClick={() => setShowFrontEnd(false)} className={showFrontEnd ? 'btn btn-dark   shadow rounded-5' : 'btn btn-primary shadow rounded-5'}>Back-End</button>
                    </div>
                    {showFrontEnd ?
                        <div className=' text-light'>
                            true

                        </div>
                        :
                        <div className=' text-light'>
                            false
                        </div>
                    }
                </Col>
                <Col></Col>
            </Row>
        </>
    )
}

export default Project