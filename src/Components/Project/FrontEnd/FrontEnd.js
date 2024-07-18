import React, { useState } from 'react'
import './FrontEnd.css'
import { Col, Image, Row } from 'react-bootstrap'
import pif from '../../../assets/pif.png'
import pos from '../../../assets/pos.png'
import fb from '../../../assets/face web.png'
import github from '../../../assets/25231.png'
import { Link } from 'react-router-dom'

function FrontEnd() {
    const [select, setSelece] = useState(0)
    const Details = [{
        name: 'Website PIF',
        des: 'Laravel blade for website in frontend and backend.  Bootstrap 5 for template.',
        img: pif,
        url: 'https://github.com/SundevCat/pro_pif'
    }, {
        name: 'Facebook copy',
        des: 'React Framework and tailwind.',
        img: fb,
        url: 'https://github.com/SundevCat/react-facebook'
    }, {
        name: 'POS System',
        des: 'Angular Framework and Bootstrap5.',
        img: pos,
        url: 'https://github.com/SundevCat/MyProjectWeb'
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