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
            <Row className=' row-cols-2  animation my-5 '>
                {Details.map((data, i) =>
                    <Col className='' key={i}>
                        <div className=' py-3 py-md-4'>
                            <Image className=' d-block m-auto w-75 h-75 object-fit-contain hover' rounded src={data.img} />
                            <div className=' text-center py-1 fs-6 fw-bold'>{data.name} </div>
                            <div className=' text-center w-100 small'>{data.des} </div>
                            <div className=' m-auto w-25 h-25 my-2'>
                                <Link to={data.url} target='_blank'>
                                    <Image className=' d-block m-auto w-50 h-50 object-fit-contain' roundedCircle src={'https://www.plantoys.com/cdn/shop/files/PlanToys_logo_color_no_tagline_70x.webp?v=1684462048'} />
                                </Link>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default Ecommerce