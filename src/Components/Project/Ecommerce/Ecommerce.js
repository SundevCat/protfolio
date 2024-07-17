import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import plantoys from '../../../assets/plantoys.png'
import { Link } from 'react-router-dom'

function Ecommerce() {
    const [select, setSelece] = useState(0)
    const Details = [{
        name: 'Plantoys',
        des: 'Website Ecommerce from Plantoys',
        img: plantoys,
        url: 'https://th.plantoys.com/'
    }]
    return (
        <>
            <Row className=' animation my-5 h-300px'>
                <Col xs={4} className=' d-flex flex-column gap-2'>
                    <div onClick={() => setSelece(0)} style={{ cursor: 'pointer' }}>
                        <Image className=' d-block m-auto w-100 h-100 object-fit-cover  rounded-3' src={Details[0].img} />
                        <div className=' text-center small py-2'>{Details[0].name} </div>
                    </div>
                </Col>
                <Col xs={6} className='m-auto  shadow rounded-5'>
                    <div className=' py-3 py-md-4'>
                        <Image className=' d-block m-auto w-75 h-75 object-fit-cover hover' rounded src={Details[select].img} />
                        <div className=' text-center pt-1 fs-5 fw-bold'>{Details[select].name} </div>
                        <div className=' text-center w-75 m-auto small'>{Details[select].des} </div>
                        <div className=' m-auto w-25 h-25 my-2'>
                            <Link to={Details[select].url} target='_blank'>
                                <Image className=' d-block m-auto w-50 h-50 object-fit-contain' rounded src={'https://www.plantoys.com/cdn/shop/files/PlanToys_logo_color_no_tagline_70x.webp?v=1684462048'} />
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Ecommerce