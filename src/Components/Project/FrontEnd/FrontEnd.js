import React, { useState } from 'react'
import './FrontEnd.css'
import { Col, Image, Row } from 'react-bootstrap'
import pif from '../../../assets/pif.png'
import pos from '../../../assets/pos.png'
import fb from '../../../assets/face web.png'
import plantoys from '../../../assets/plantoys.png'
import port from '../../../assets/port.png'
import github from '../../../assets/25231.png'
import { Link } from 'react-router-dom'

function FrontEnd() {
    const [select, setSelece] = useState(0)
    const Details = [{
        name: 'Website PIF',
        des: 'Laravel blade +  Bootstrap 5 ',
        img: pif,
        url: 'https://github.com/SundevCat/pro_pif'
    }, {
        name: 'Facebook copy',
        des: 'React + tailwind.',
        img: fb,
        url: 'https://github.com/SundevCat/react-facebook'
    }, {
        name: 'POS System',
        des: 'Angular + Bootstrap5.',
        img: pos,
        url: 'https://github.com/SundevCat/MyProjectWeb'
    }, {
        name: 'Protfolio',
        des: 'React + Bootstrap 5',
        img: port,
        url: 'https://github.com/SundevCat/protfolio'
    }, {
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
                                    <Image className=' d-block m-auto w-50 h-50 object-fit-contain' rounded src={github} />
                                </Link>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default FrontEnd