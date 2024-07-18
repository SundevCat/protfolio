import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import pif from '../../../assets/Product Information.png'
import pos from '../../../assets/6ecb91e73eab30f51b0b29a880338147.png'
import fb from '../../../assets/facebook-logo-facebook-icon-transparent-free-png.webp'
import github from '../../../assets/25231.png'
import { Link } from 'react-router-dom'
function BackEnd() {
    const [select, setSelece] = useState(0)
    const Details = [{
        name: 'PIF BackEnd',
        des: 'Laravel blade for website in frontend and backend.',
        img: pif,
        url: 'https://github.com/SundevCat/pro_pif'
    }, {
        name: 'Facebook API',
        des: 'NodeJS and ExpressJS connect to MongoDB Database.',
        img: fb,
        url: 'https://github.com/SundevCat/NodeAPI'
    }, {
        name: 'POS System API',
        des: 'ASP.NET Core connect to MongoDB Database.',
        img: pos,
        url: 'https://github.com/SundevCat/MyProjectAPI'
    }]
    return (
        <>
            <Row className=' row-cols-2 animation my-5 '>
                {Details.map((data, i) =>
                    <Col className='' key={i}>
                        <div className=' py-1 py-md-2'>
                            <Image className=' d-block m-auto w-50 h-50 object-fit-contain hover' rounded src={data.img} />
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

export default BackEnd